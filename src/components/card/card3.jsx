import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/3.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Visitors Online 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          95,5741
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
