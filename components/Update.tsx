import React, { useState } from 'react'
import { database } from '../config/config'
import { ref } from 'firebase/database'

const Update = (data: string) => {
    const dbref = ref(database, data)
    const [name, updateName] = useState<any>()

    

  return []
}

export default Update