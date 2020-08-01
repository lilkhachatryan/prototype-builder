import axios from "../plugins/axios";

const registerUserURL = 'users/register';
const loginURL = 'users/login';
const canvasesURL = 'projects/list';
const loadCanvasWithIdURL = 'projects';
const postCanvasURL = 'projects';

export const registerService = (newUser) => axios.post(registerUserURL, newUser);

export const loginUserService = (user) => axios.post(loginURL, user);

export const loadCanvasesService = () => axios.get(canvasesURL);

export const loadCanvasWithIdService = (id) => axios.get(`${loadCanvasWithIdURL}/${id}`);

export const postCanvas = (canvas) => axios.post(postCanvasURL, canvas);




