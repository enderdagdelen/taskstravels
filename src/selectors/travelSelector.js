import moment from 'moment'

const getVisibleTravels = (travels, {searchText, sortBy, startDate, endDate, orderBy}) => {
    return travels.filter((travel)=>{
        const startDateMatch = startDate ? moment(travel.dateOfDeparture).isSameOrAfter(startDate) : true;
        const endDateMatch = endDate ? moment(travel.dateOfDeparture).isSameOrBefore(endDate):true;
        const textMatch = 
        travel.name.toLowerCase().includes(searchText.toLowerCase()) 
        || travel.project.toLowerCase().includes(searchText.toLowerCase())
        || travel.travelDestination.toLowerCase().includes(searchText.toLowerCase())
        || travel.accomodationAddress.toLowerCase().includes(searchText.toLowerCase())
        || travel.notes.toLowerCase().includes(searchText.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            if(orderBy === 'inc'){
                return a.dateOfDeparture > b.dateOfDeparture ? 1 : -1;
            }
            return a.dateOfDeparture < b.dateOfDeparture ? 1 : -1;
        }else if(sortBy === 'project'){
            if(orderBy === 'inc'){
                return a.project > b.project ? 1 : -1;
            }
            return a.project < b.project ? 1 : -1;

        }else if (sortBy === 'name'){
            if(orderBy === 'inc'){
                return a.name > b.name ? 1 : -1;
            }
            return a.name < b.name ? 1 : -1;

        }else if(sortBy === 'destination'){
            if(orderBy === 'inc'){
                return a.travelDestination > b.travelDestination ? 1 : -1;
            }
            return a.travelDestination < b.travelDestination ? 1 : -1;

        }else if(sortBy === 'lengthofstay'){
            if(orderBy === 'inc'){
                return a.lengthOfStay > b.lengthOfStay ? 1 : -1;
            }
            return a.lengthOfStay < b.lengthOfStay ? 1 : -1;

        }else if(sortBy === 'advance'){
            if(orderBy === 'inc'){
                return a.advance > b.advance ? 1 : -1;
            }
            return a.advance < b.advance ? 1 : -1;

        }
    })
}// for tasks sortBy criterias=name,project,dateOfDeparture,advance,travelDestination,lengthofstay

export default getVisibleTravels