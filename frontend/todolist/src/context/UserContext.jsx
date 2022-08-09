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
			let dashboardFind;
			if(currentDashboard){
				dashboardFind = user.dashboards.filter(dashboard => dashboard._id === currentDashboard._id)[0]
			}
			else{
				dashboardFind = user.dashboards.filter(dashboard => dashboard._id === user.dashboards[0]._id)[0]
			}
			let dashboardStages = await fetchStages(dashboardFind._id); 
			const dashboardUpdate = {
				...dashboardFind,
				stages: [
					...dashboardStages
				]
			}
			setCurrentDashboard(dashboardUpdate);
		}
		if(user && user.dashboards.length > 0){
			getStages();
		}
		else{
			setCurrentDashboard(null)
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
		const stageFind = currentDashboard.stages.find((stage) => stage._id === taskDelete.stageId);
		stageFind.tasks = stageFind.tasks.filter((task) => task._id !== taskDelete.taskId) 		
		
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