import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GridDemo from '../chart/chart1'
import ActionAreaCard from '../card/card1'
import ActionAreaCard2 from '../card/card2'
import ActionAreaCard3 from '../card/card3'
import BasicPie from '../chart/chart2'
import BasicScatter from '../chart/chart3'
import Linkdin from '@mui/icons-material/LinkedIn';
import StandardImageList from '../image/page';
import BasicTable from '../table/page';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{width:'100%', flexGrow: 1,overflow:'hidden'}}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
                <ActionAreaCard/>
                </Item>
            <Item>
            <GridDemo/>
                </Item>
          </Grid>
        ))}
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
               <ActionAreaCard2 />
                </Item>
            <Item>
            <BasicPie/>
                </Item>
          </Grid>
        ))}
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
               <ActionAreaCard3 />
                </Item>
            <Item>
               <BasicScatter />
                </Item>
          </Grid>
        ))}
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={11} >
            <Item>
               <BasicTable />
                </Item>
          </Grid>
        ))}
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={11} key={index} >
            <Item>
               <StandardImageList />
                </Item>
          </Grid>
        ))}
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={12} key={index} >
            <Item>
              <>
              <h2>code by zahra karami</h2>
              <a href="https://www.linkedin.com/in/zahra-karami-7643ba231/"><Linkdin/></a>
              </>
              
                </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
