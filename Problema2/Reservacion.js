export default class Reservacion{
    constructor (nombre, tipoHabitacion, costoDia, diaInicio, cantidadDias){
        this._nombre = nombre;
        this._tipoHabitacion = tipoHabitacion;
        this._costoDia = costoDia;
        this._diaInicio = diaInicio;
        this._cantidadDias = cantidadDias;
    }

    informacionReservacion(){
        console.log(`Nombre: ${this._nombre}\nTipo de habitacion: ${this._tipoHabitacion}\nPrecio por día: ${this._costoDia}\nDia de inicio: ${this._diaInicio}\nCantidad de Días: ${this._cantidadDias}`);
    }

    get nombre(){
        return this._nombre;
    }

    get tipoHabitacion(){
        return this._tipoHabitacion;
    }

    get costoDia(){
        return this._costoDia;
    }

    get diaInicio(){
        return this._diaInicio;
    }

    get cantidadDias(){
        return this._cantidadDias;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set tipoHabitacion(tipoHabitacion){
        this._tipoHabitacion = tipoHabitacion;
    }

    set costoDia(costoDia){
        this._costoDia = costoDia;
    }

    set diaInicio(diaInicio){
        this._diaInicio = diaInicio;
    }

    set cantidadDias(cantidadDias){
        this._cantidadDias = cantidadDias;
    }
}