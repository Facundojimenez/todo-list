import { useEffect } from "react";
import { createContext, useState } from "react";
import {fetchStages} from "../utils/fetchData"
import useLocalStorage from "../utils/useLocalStorage";

const UserContext = createContext([]);

const userr = {
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
	const [user, setUser] = useLocalStorage("user", {})
	const [currentDashboard, setCurrentDashboard] = useState(user.dashboards ? user.dashboards[0] : {})

	useEffect(() => {
		const getStages = async () => {
			let currentStages = await fetchStages(); ///DEBERIA BUSCAR SOLO LAS STAGES DEL DASHBOARD ACTUAL

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
	
	const addStageRender = (newStage) =>{

		console.log("se agregó el stage " + newStage.title + ": " + newStage.description )
		
		const newDashboard = {
			...currentDashboard,
			stages: [
				...currentDashboard.stages,
				newStage
			]
		}

		setCurrentDashboard(newDashboard)
		console.log(newDashboard)
	}

	const addTaskRender = (newTask) =>{
		console.log("se agregó el render " + newTask.title + ": " + newTask.description )
		const stageFind = currentDashboard.stages.find((stage) => stage._id === newTask.stageId);
		stageFind.tasks.push(newTask)	
		

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

	const deleteStageRender = (stageDelete) =>{
		console.log("se borro el render del stage " + stageDelete )

		const updatedStages = currentDashboard.stages.filter((stage) => stage._id !== stageDelete)
		
		const newDashboard = {
			...currentDashboard,
			stages: [
				...updatedStages
			]
		}

		setCurrentDashboard(newDashboard)
	}

    return (
    <UserContext.Provider value={{ currentDashboard, addTaskRender, addStageRender, deleteTaskRender, deleteStageRender, user, setUser}}>
        {children}
    </UserContext.Provider>
    );
};

export default UserContext;