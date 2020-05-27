import { DistributionPicker } from '@fe-components/distributionpicker/ecma5';
import { Datepicker } from '@fe-components/datepicker/ecma5';
import "@fe-components/distributionpicker/ecma5/style.css"
import "@fe-components/datepicker/ecma5/style.css"


const i18n = {
  mobileHeaderTitleRooms: 'Habitaciones',
  applyButton: 'Aplicar',
  addRoom: 'Añadir habitación',
  removeRoom: 'Eliminar',
  room: 'Habitación',
  adultsTitle: 'Adultos',
  adultsSubTitle_1: 'Desde ',
  adultsSubTitle_2: ' años',
  minorsTitle: 'Menores',
  minorsSubTitle_1: 'Hasta ',
  minorsSubTitle_2: ' años',
  minorAgeTitle: 'Edad del menor',
  minorAgeSubTitle: 'Al finalizar el viaje',
  inArms: 'En brazos',
  inSeat: 'En asiento',
  years: 'años',
  year: 'año',
  to: 'Hasta',
  age: 'Edad',
  minorsWhitoutAgeError: 'Ingresa la edad del menor',
  minorsInArmsExceededError: 'No puedes ingresar más bebés que adultos',
  passengersExceededError: 'Selecciona hasta 8 pasajeros',
  mobileHeaderTitle: 'Pasajeros',
  babyRate: 'Tarifa bebé',
  minorRate: 'Tarifa niño',
  adultRate: 'Tarifa adulto',
  passengersTitle: 'Pasajeros',
  passengersSubTitle: '',
  from0To24Months: '0 a 24 meses',
  from2To11Years: '2 a 11 años',
  from12years: '12 años o más',
  onlyAdultsOldWarning: 'Sólo puedes ingresar personas mayores de 65 años',
  onlyAdultsDisabledWarning: 'Sólo puedes ingresar personas con discapacidad',
  ticketType: "Clase"
 }

 const trackingData = {
  tcli: 'tcli',
  xClient: 'xClient',
  pr: 'pr',
  fl: 'fl',
}

const i18ndate = {
  monthsNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  weekDaysNames: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  mobileHeaderTitle: 'Selecciona tus fechas',
  mobileApplyButton: 'Aplicar',
  mobileHeaderStartRange: 'Ida',
  mobileHeaderEndRange: 'Vuelta',
  nights: 'Noches',
  night: 'Noche'
};



export const datepicker = new Datepicker({
  i18n: i18ndate,
  dateSelectionType: 'singleDate',
  isMobile: false,
  settings: {
    todayDate: '2020-07-26',
    monthsToRender: 1,
    availableDays: 40,
  },
  disableDates: (date) => {
    let dateFrom = "2020-07-26";
    let dateTo = "2020-08-10";

    let d1 = dateFrom.split("-");
    let d2 = dateTo.split("-");
    let c = date.split("-");

    let from = new Date(d1[0],parseInt(d1[1])-1,d1[2]);  // -1 because months are from 0 to 11
    let to   = new Date(d2[0],parseInt(d2[1])-1,d2[2]);
    let check = new Date(c[0],parseInt(c[1])-1,c[2]);

    return !(check > from && check < to)
  }
})

export const distpicker = new DistributionPicker({
  trackingData,
  i18n,
});