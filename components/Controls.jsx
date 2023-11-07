import { Box, VStack, ButtonText, Button } from "@gluestack-ui/themed"


export default function Controls({ setVolume, volume }){

    return(
        
        <Box flexDirection="row" marginTop="$8" flexWrap="wrap" justifyContent="center">
        <Button m="$4" rounded="$xl" bgColor="$blue600" onPress={() => setVolume(volume + 250)}>
            <ButtonText>Add 🥤</ButtonText>
           
        </Button>
        <Button m="$4" rounded="$xl" bgColor="$blue600" onPress={() => setVolume(volume + 750)}>
            <ButtonText>Add 🫙</ButtonText>
            
        </Button>
        <Button m="$4" rounded="$xl" action="negative" onPress={() => setVolume(volume * 0)}>
            <ButtonText>Reset 🥳</ButtonText>
            
        </Button>
        
        </Box>

        
       
    )
}