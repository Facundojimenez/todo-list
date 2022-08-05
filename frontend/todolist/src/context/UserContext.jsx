import { useEffect } from "react";
import { createContext, useState } from "react";
import {fetchStages} from "../utils/fetchData"

const UserContext = createContext([]);

const user = {
	_id: 1,
	username: "facu",
	email: "facu@gmail.com",
	dashboards: [
		{
			title: "nuevoi TITLE update2",
			_id: 3
		},
		{
			title: "nuevo dashboard API",
			_id: 4
		},
		{
			title: "nuevo dashboard API",
			_id: 5
		}        
	]
}

export const UserProvider = ({ children }) => {
	const [currentDashboard, setCurrentDashboard] = useState(user.dashboards[0])

	useEffect(() => {
		const getStages = async () => {
			const currentStages = await fetchStages(); ///DEBERIA BUSCAR SOLO LAS STAGES DEL DASHBOARD ACTUAL
			
			const dashboardUpdate = {
				...currentDashboard,
				stages: [
					...currentStages
				]
			}
			setCurrentDashboard(dashboardUpdate);
		}
		getStages();	
	}, [])
	
	const addTaskRender = (newTask) =>{
		console.log("se agregó el render " + newTask.title + ": " + newTask.description )
		const stageFind = currentDashboard.stages.find((stage) => stage._id === newTask.stageId);
		stageFind.tasks.push(newTask)	
		
		console.log(stageFind)

		const newStages = currentDashboard.stages.map((stage) => {
			if(stage._id === stageFind._id){
				return stageFind
			}
			return stage
		})

		const newDashboard = {
			...currentDashboard,
			stages: [
				...newStages
			]
		}

		setCurrentDashboard(newDashboard)

		console.log(newDashboard)
	}

	const deleteTaskRender = (taskDelete) =>{
		console.log("se borro el render " + taskDelete.title + ": " + taskDelete.description )
		const stageFind = currentDashboard.stages.find((stage) => stage._id === taskDelete.stageId);
		stageFind.tasks = stageFind.tasks.filter((task) => task._id !== taskDelete.taskId) 		
		
		console.log(stageFind)

		const newStages = currentDashboard.stages.map((stage) => {
			if(stage._id === stageFind._id){
				return stageFind
			}
			return stage
		})

		const newDashboard = {
			...currentDashboard,
			stages: [
				...newStages
			]
		}

		setCurrentDashboard(newDashboard)

		console.log(newDashboard)
	}

    return (
    <UserContext.Provider value={{ currentDashboard, addTaskRender, deleteTaskRender}}>
        {children}
    </UserContext.Provider>
    );
};

export default UserContext;