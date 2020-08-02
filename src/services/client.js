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

export const postCanvasService = (canvas) => axios.post(postCanvasURL, {canvas});

export const updateCanvasService = (id, canvas) => axios.patch(`${postCanvasURL}/${id}`, {canvas});




