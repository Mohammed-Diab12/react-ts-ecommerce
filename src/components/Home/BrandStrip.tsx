import { Box } from '@mui/material'
function BrandStrip() {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",}}>
        <Box >
            < img src="../../../public/startUpSocks.svg" alt='Start Up Socks' height={100} width={100}/>
        </Box>

        <Box>
            < img src="../../../public/swachhBharat.svg" alt='swachh Bharat' height={100} width={100}/>

            </Box>
            <Box>
        < img src="../../../public/Swatch-logo.svg" alt='Swatch' height={100} width={100}/>
            </Box>
            <Box>
                        < img src="../../../public/gardenLandScaping.svg" alt='garden Land Scaping' height={100} width={100}/>

            </Box>
            <Box>
                        < img src="../../../public/toshiba.svg" alt='Toshiba' height={100} width={100}/>

            </Box>
            <Box>
                        < img src="../../../public/yody.svg" alt='yody young and dynamic' height={100} width={100}/>

            </Box>
    </Box>
)
}

export default BrandStrip