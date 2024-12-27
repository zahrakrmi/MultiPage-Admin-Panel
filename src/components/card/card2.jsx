import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/2.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Weekly Orders  
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          45,6334
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
