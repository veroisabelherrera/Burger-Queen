import React, { Component } from 'react'
import H3 from '../atoms/H3'
import H4 from '../atoms/H4'
import Button from '../atoms/Button'

export default class ContResumeOrder extends Component {
    render() {
        return (
            <div style={contPrincipal}>
                <div style={order}>
                    <H3 title= 'Pedidos'/>
                </div>
                <div style={table}>
                    <div style={table1}> 
                        <H4 title= 'Mesa 1' style={numberTable}/>
                        <Button title='Agregar Orden' style={btnAdd}/>
                    </div>
                    <div style={table2}>
                        <Button title='Orden Entregada' style={btnAdd}/>
                        <Button title='Pagada' style={btnAdd}/>
                        <Button title='Cerrar Mesa' style={btnAdd}/>
                    </div>
                    

                </div>
                
                
            </div>
        )
    }
}
const contPrincipal={
    display:'flex',
    flexDirection:'column',
    width:'512px',
    background:'#FFFFFF',
    alignItems:'center',
    height: '700px'
    
}

const order={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#C4C4C4',
    width:'512px',
    height: '70px',
    fontSize:'22px',
    color:'#002B8A',
    
}

const table1={
    display:'flex',
    width:'490px',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
}

const table={
    display:'flex',
    width:'490px',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    background:'#CFCFCF',
    border: '1.5px solid #002B8A',
    borderRadius: '10px',
    marginTop:'2%',
    height: '130px',
}

const table2={
    display:'flex',
    width:'490px',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginLeft:'20px'
}


const numberTable={
    marginLeft:'30px',
}
const btnAdd={
    marginRight:'9px',
    border:'2px solid #002B8A',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontFamily:'Roboto',
    fontSize:'15px',
    color:'#FFFFFF',
    background:'#002B8A',
    width:'130px'

    

}