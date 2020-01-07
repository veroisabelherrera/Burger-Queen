import React, { Component } from 'react'
import H3 from '../atoms/H3'
import H4 from '../atoms/H4'
import Button from '../atoms/Button'

export default class ContResumeOrder extends Component {
    render() {
        return (
            <div>
                <div>
                    <H3 title= 'Pedidos'/>
                </div>
                <div>
                    <div>
                        <H4 title= 'Mesa 1'/>
                        <Button title='Agregar Orden'/>
                    </div>
                    <div>
                        <Button title='Orden Entregada'/>
                        <Button title='Pagada'/>
                        <Button title='Cerrar Mesa'/>
                    </div>
                    

                </div>
                
                
            </div>
        )
    }
}
