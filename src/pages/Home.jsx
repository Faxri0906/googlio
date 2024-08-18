import { Container } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lizard from "../img/lizard.png";
import scorpion from "../img/scorpion.png";
import snake from "../img/snake.png";
import penguins from "../img/penguins.png";
import bear from "../img/bear.png";
import seal from "../img/seal.png";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Home = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <>
    <Container maxWidth="dop" sx={{
      paddingTop: 8,
    }}>
      <Typography variant="h3">
        Desert Animals
      </Typography>
    </Container>
    <Container maxWidth="xl" sx={{
      paddingTop: 8,
      gap: 16,
      display: {
        xs: 'flex-col',
        md: 'flex',
      }
    }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={lizard}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={scorpion}
          title="scorpion"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Scorpion
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Scorpions primarily prey on insects and other invertebrates, but some species hunt vertebrates.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={snake}
          title="snake"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Snake
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
    <Container maxWidth="dop" sx={{
      paddingTop: 4,
    }}>
      <Typography variant="h3">
        Arctic and Antarctica Animals
      </Typography>
    </Container>
    <Container maxWidth="xl" sx={{
      paddingTop: 8,
      gap: 16,
      display: {
        xs: 'flex-col',
        md: 'flex',
      }
    }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={penguins}
          title="penguins"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Penguins
          </Typography>
          <Typography variant="body2" color="text.secondary">
            They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={bear}
          title="polar bear"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bear
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The polar bear is the largest extant species of bear and land carnivore, with adult males weighing 300–800 kg (660–1,760 lb).
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={seal}
          title="seal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            seal
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The earless seals, phocids, or true seals are one of the three main groups of mammals within the seal lineage, Pinnipedia. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
    <BottomNavigation sx={{ 
      paddingTop: 12,
      maxWidth: 10000,
      }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  </>
  );
};

export default Home;