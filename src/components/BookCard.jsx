import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function BookCard({ volumeInfo }) {


  const thumbnailChecker = (thumbnail) => {
    if (!thumbnail) {
      return <div>No thumbnail available</div>;
    }
  };

  return (
    <div>
      <Card
        sx={{
          height: 500,
          width:300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0.5rem',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardMedia
          sx={{ height:350, objectFit: 'contain' }}
          component="img"
          image={volumeInfo.imageLinks?.thumbnail}
          title={volumeInfo.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {volumeInfo.authors}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
        </CardActions>
      </Card>
    </div>
  );
}
