import styled from 'styled-components';

export const ContainerStyled = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    width: '100%',
    height: '100%',
    paddingTop: '80px',
});

export const ErrorMessageStyled = styled('p')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    fontSize: '32px',
})
