
import { Box, Image } from "@gluestack-ui/themed"
import drops from "../assets/splash-square.jpg"
import { useState } from "react"


export default function WaterIamge(){
    const [volume, setVolume] = useState(500)

    return(
        <Box rounded='$full'>
        <Image source={drops} alt="Water droplets on glass" size="2xl" rounded='$full' borderColor="$white" borderWidth={4}/>
        </Box>
    )
}