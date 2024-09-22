import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


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

export default function ButtonList() {
      // État local pour gérer les boutons visibles
  const [buttons, setButtons] = useState(Array.from(Array(33).keys()));
  // Fonction pour gérer la suppression des boutons cliqués
  const handleButtonClick = (index) => {
  
    setButtons(buttons.filter((button) => button !== index));
  };
  return (
    <div className='row offset-3 col-6 mt-5'>
        <h2 className='text-center pb-4 display-1'><u>Les Paniers d'Offrandes</u></h2>
      <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }}  // Espacement entre les éléments
        columns={{ xs: 12, sm: 12, md: 12 }}  // Grille sur 12 colonnes
        justifyContent="center"  // Centre les éléments
      >
        {buttons.map((index) => (
          <Grid 
            item 
            xs={3}  // Chaque bouton occupe 3 colonnes, donc 4 boutons par ligne
            sm={3}  
            md={3}  
            key={index}
          >
            <Button
              variant="outlined"
              onClick={() => handleButtonClick(index)}  // Supprime le bouton lorsqu'il est cliqué
              sx={{ fontWeight: 'bold' }}  // Style gras pour les boutons
            >
              Panier {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
