import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './CadastroUsuario.css';

function CadastroUsuario(){
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6} className='imagem2' ></Grid>
        <Grid item xs={6} alignItems='center'>
            <Box paddingX={10}>
        <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="texto2">Cadastre-se</Typography>
                        <TextField id='nome' label='nome' variant='outlined'name='nome' margin='normal' fullWidth/>
                        <TextField id='usuario' label='usuario' variant='outlined'name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='senha' variant='outlined'name='senha'type='password'margin='normal' fullWidth/>
                        <TextField id='confirmarsenha' label='confirmar senha' variant='outlined'name='confirmarsenha' margin='normal' type='password' fullWidth/>
                    <Box marginTop={2} textAlign='center'>
                       
                    <Button variant ='contained' color='secondary' className="btnCancelar">
                        Cancelar
                        </Button>
                        
                        <Link to='/login' className='text-decorator-none'>
                        <Button  type='submit' variant='contained' color='primary'>
                       
                            Cadastrar

                        </Button>
                        </Link>
                    </Box>
                    </form>
                    </Box>
        </Grid>
        </Grid>
    )
}

export default CadastroUsuario;