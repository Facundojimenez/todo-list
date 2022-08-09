import { useEffect } from "react";
import { createContext, useState } from "react";
import {fetchStages} from "../utils/fetchData"
import useLocalStorage from "../utils/useLocalStorage";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null)
	const [currentDashboard, setCurrentDashboard] = useState( () => {
		if(!user || user.dashboards.length === 0){
			return null;
		}
		return user.dashboards[0]
	})

	useEffect(() => {
		const getStages = async () => {
			let dashboardStages = await fetchStages(user.dashboards[0]._id); 
			const dashboardUpdate = {
				...user.dashboards[0],
				stages: [
					...dashboardStages
				]
			}
			setCurrentDashboard(dashboardUpdate);
		}
		// console.log(user.dashboards)
		if(user && user.dashboards.length > 0){
			getStages();
		}
		
	}, [user])
	
	const changeDashboard = async (dashboardId) => {
		const dashboardFind = user.dashboards.find(dashboard => dashboard._id === dashboardId)

		let dashboardStages = await fetchStages(dashboardFind._id); ///DEBERIA BUSCAR SOLO LAS STAGES DEL DASHBOARD ACTUAL

			const dashboardUpdate = {
				...dashboardFind,
				stages: [
					...dashboardStages
				]
			}
			setCurrentDashboard(dashboardUpdate);
	}

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
    <UserContext.Provider value={{ currentDashboard, setCurrentDashboard, addTaskRender,changeDashboard, addStageRender, deleteTaskRender, deleteStageRender, user, setUser}}>
        {children}
    </UserContext.Provider>
    );
};

export default UserContext;