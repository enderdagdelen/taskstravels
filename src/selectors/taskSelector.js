import moment from 'moment'

const getVisibleTasks = (tasks, {searchText,sortBy,startDate,endDate,orderBy}) => {
    return tasks.filter((task)=>{
        const startDateMatch = startDate ? moment(task.date).isSameOrAfter(startDate) : true;
        const endDateMatch = endDate ? moment(task.date).isSameOrBefore(endDate):true;
        const textMatch = 
        task.name.toLowerCase().includes(searchText.toLowerCase()) 
        || task.project.toLowerCase().includes(searchText.toLowerCase())
        || task.taskLocation.toLowerCase().includes(searchText.toLowerCase())
        || task.notes.toLowerCase().includes(searchText.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
  
            if(orderBy === 'inc'){
                return a.date > b.date ? 1 : -1; // k-b
            }
            return a.date < b.date ? 1 : -1; // b-k
            
        }else if(sortBy === 'name'){

            if(orderBy === 'inc'){
                return a.name > b.name ? 1 : -1;
            }
            return a.name < b.name ? 1 : -1;

        }else if (sortBy === 'project'){

            if(orderBy === 'inc'){
                return a.project > b.project ? 1 : -1;
            }
            return a.project < b.project ? 1 : -1;

        }else if(sortBy === 'advance'){

            if(orderBy === 'inc'){
                return a.advance > b.advance ? 1 : -1;
            }
            return a.advance < b.advance ? 1 : -1;

        }

        return 0
        
    })

    
}// for tasks sortBy criterias=name,project,date,advance


export default getVisibleTasks