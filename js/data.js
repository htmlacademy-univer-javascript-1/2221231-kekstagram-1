import {getRandomPositiveInteger} from './util.js';

const NAMES = ['Мария','Дарья','Михаил','Евгений','Алексей','Ольга','Никита','Елизавета'];

const DESCRIPTION = ['Прекрасное начало дня',
  'Начало этой истории..','На бис',
  'Пользователь занят, на зонки не отвечает)',
  'Моя мир искрится впечатлениями',
  'Держи, и никому не отдавай',
  'Мне только снится, что я тебе верю',
  'Я буду всегда','Как ангелы и боги',
  'Все дороги открыты','И никто этого не узнает'];

const MESSAGES=['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const getRandomElement=(array)=>array[getRandomPositiveInteger(0,array.length-1)];

export {NAMES,DESCRIPTION,MESSAGES,getRandomElement};
