import { API } from '../config';

const token = localStorage.getItem('jwt');



//  POST /users/register


export const registerUser = async(username, password) => {
    
    try {
        const response = await fetch(`${API}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        const result = await response.json();
        
        console.log("Register User:", result);
        return result;
    } catch (error) {
        console.log(error);
    }
}


//  POST /users/login


export const loginUser = async(credentials) => {
      try{
        const response = await fetch(`${API}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                credentials
            })
        })
        const result = await response.json();
      
        console.log("Login", result);
        
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}


// GET /users/me


export const getMyData = async() => {
    try {
        const response = await fetch(`${API}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
       
        const result = response.json();
       
        console.log("me:", result);
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// GET /users/:username/routines


export const getUserRoutines = async(username, token) => {
    try {
        const response = await fetch(`${API}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = response.json();
       

        console.log("Routines", result);
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// GET /activities


export const getAllActivities = async() => {
    
    try {
        const response = await fetch(`${API}/api/activities`,{
            headers: {
                'Content-Type': 'application/json'
    
            }
        })
        const result = await response.json();
        console.log("activities:", result);
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// POST /activities


export const createActivity = async(name, description) => {
    try {
        const response = await fetch(`${API}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                description
         
            }),
        })
        const result = await response.json();
        
        console.log("createActivit:", result);
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// PATCH /activities/:activityId


export const updateActivity = async(name, description) => {
    try {

        const response = await fetch(`${API}/activities`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        
        },
      
            method: 'PATCH',
            body: JSON.stringify({
                name,
                description
      
            }),
      
        })
        const result = response.json();
       
        console.log("updateActivity:", result);
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// GET /activities/:activityId/routines


export const getPublicRoutineByActivity = async(activityId) => {
    try{
        const response = await fetch(`${API}/activities/${activityId}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
       
        console.log("publicRoutinesByActivity:", result);
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// GET /routines


export const getPublicRoutines = async() => {

    try {
        const response = await fetch(`${API}/routines`, {
             headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        console.log("publicRoutines:", result);
       
        return result;
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}



// POST /routines


export const createRoutine = async(name, goal, isPublic) => {
    try {
    const response = await fetch(`${API}/routines`, {
   
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic
      })
    });
    const result = await response.json();
   
    console.log("createRoutine:",result);
    return result
}  catch (error) {
    console.log("Error",error);
    alert("Error", error)
  }
}


// PATCH /routines/:routineId



export const updateRoutine = async(routineId, name, goal) => {
    try {

      const response = await fetch(`${API}/routines/${routineId}`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
    },
        body: JSON.stringify({
          name,
          goal
        })
      });
      
      const result = await response.json();
      
      console.log("updateRoutine:",result);
      return result
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}

// DELETE /routines/:routineId



export const deleteRoutine = async(routineId) => {
    try {

      const response = await fetch(`${API}/routines/${routineId}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
    },
      
    });
      const result = await response.json();
      console.log("deleteRoutine:", result);
      
      return result
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}


// POST /routines/:routineId/activities


export const attachActivityToRoutine = async(routineId, activityId, count, duration) => {
    try {
      const response = await fetch(`${API}/routines/${routineId}/activities`, {
      
        method: "POST",
        headers: {
      
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          activityId,
          count,
          duration
        })
      });
      const result = await response.json();
      console.log("attachActivityToRoutine:", result);

      return result
    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}


// PATCH /routine_activities/:routineActivityId

export const updateCountOrDuration = async(routineActivityId, count, duration) => {
    try {
      
        const response = await fetch(`${API}/routine_activities/${routineActivityId}`, {
       
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          count,
          duration,
        })
      });
      const result = await response.json();

      console.log("updateCountOrDuration:", result);
      return result

    }  catch (error) {
        console.log("Error",error);
        alert("Error", error)
      }
}

// DELETE /routine_activities/
export const deleteRoutineActivity = async(routineActivityId) => {
    try {

    const response = await fetch(`${API}/routine_activities/${routineActivityId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
    });
    const result = await response.json();
    console.log(result);

    return result
  } catch (error) {
    console.log("Error",error);
    alert("Error", error)
  }
  
}