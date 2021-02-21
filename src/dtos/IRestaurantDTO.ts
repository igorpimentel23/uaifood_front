export default interface IRestaurantDTO {
  id: string;
  name: string;
  street: string;
  street_number: number;
  city: string;
  state: string;
  cost: number;
  rating: number;
  type: string;
  radius: number;
  lat: number;
  lng: number;
}
