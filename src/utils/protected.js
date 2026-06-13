export const isDoctor = (user)=>{
    return user?.role === 'doctor'
}

export const isNurse = (user) =>{
    return user?.role === 'nurse'
}
export const isPatient = (user) =>{
    return user?.role === 'patient'
}

export const isAdmin = (user) =>{
    return user?.role === 'admin'
}