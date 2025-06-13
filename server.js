console.log('Hier komt je server voor Sprint 12.')
// Importeer het npm package Express
import express from 'express';

// hier komt database linken 
import { Liquid } from 'liquidjs'

// Maak een nieuwe Express applicatie aan

const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische bestanden (zoals CSS en afbeeldingen)
app.use(express.static('public'))

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

