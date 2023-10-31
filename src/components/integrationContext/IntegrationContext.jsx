import React, { createContext, useState } from "react";

export const IntegrationContext = createContext();


export const IntegrationContextProvider = ({children})=>{
    const [dashboard,setDashboard] = useState({
        integrationone:{isComplete:false,tabValue:0,tabIndex:[0]},
        integrationTwo:{isComplete:false,tabValue:0,tabIndex:[0]},
        integrationThree:{isComplete:false,tabValue:0,tabIndex:[0]}
    });
    const[isCompleted,setIscompleted] = useState([]);
    const updateDashboard = {...dashboard};

    const ChangeTabStatus = ({tabstatus})=>{
        setIscompleted([...isCompleted,tabstatus])
    }

    const ChangeTabOneValue = ({tabvalue})=>{
        if(updateDashboard.integrationone.tabValue>tabvalue){
            updateDashboard.integrationone.tabValue = tabvalue;
           setDashboard(updateDashboard);
        }
        else{
            updateDashboard.integrationone.tabValue = tabvalue;
            if(updateDashboard.integrationone.tabIndex.includes(tabvalue)){
                setDashboard(updateDashboard);
            }
            else{

                updateDashboard.integrationone.tabIndex.push(tabvalue);
                setDashboard(updateDashboard);
            }
        }
    }
    const ChangeTabTwoValue = ({tabvalue})=>{
        if(updateDashboard.integrationTwo.tabValue>tabvalue){
            updateDashboard.integrationTwo.tabValue = tabvalue;
           setDashboard(updateDashboard);
        }
        else{
            updateDashboard.integrationTwo.tabValue = tabvalue;
            if(updateDashboard.integrationTwo.tabIndex.includes(tabvalue)){
                setDashboard(updateDashboard);
            }
            else{

                updateDashboard.integrationTwo.tabIndex.push(tabvalue);
                setDashboard(updateDashboard);
            }
        }
    }
    const ChangeTabThreeValue = ({tabvalue})=>{
        if(updateDashboard.integrationThree.tabValue>tabvalue){
            updateDashboard.integrationThree.tabValue = tabvalue;
           setDashboard(updateDashboard);
        }
        else{
            updateDashboard.integrationThree.tabValue = tabvalue;
            if(updateDashboard.integrationThree.tabIndex.includes(tabvalue)){
                setDashboard(updateDashboard);
            }
            else{

                updateDashboard.integrationThree.tabIndex.push(tabvalue);
                setDashboard(updateDashboard);
            }
        }
    }

    return(
        <IntegrationContext.Provider value={{dashboard,isCompleted,ChangeTabOneValue,ChangeTabTwoValue,ChangeTabThreeValue,ChangeTabStatus}} >
           {children}
        </IntegrationContext.Provider>
    )
}
