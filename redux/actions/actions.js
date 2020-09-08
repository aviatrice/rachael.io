// Action Types
export const SET_HOVER_GITHUB = 'SET_HOVER_GITHUB';
export const SET_HOVER_RESUME = 'SET_HOVER_RESUME';
export const SET_CONTENT_ANIMATING = 'SET_CONTENT_ANIMATING';
export const LOAD_COMPLETE_BG = 'LOAD_COMPLETE_BG';
export const LOAD_COMPLETE_CONTENT = 'LOAD_COMPLETE_CONTENT';
export const LOAD_COMPLETE_PROFILE_IMAGE = 'LOAD_COMPLETE_PROFILE_IMAGE';
export const SET_BACKGROUND_TRANSLATEY = 'SET_BACKGROUND_TRANSLATEY';
export const WIGGLE = 'WIGGLE';

// Action Creator
export const loadCompleteBG = () => ({
  type: LOAD_COMPLETE_BG,
});

export const loadCompleteContent = () => ({
  type: LOAD_COMPLETE_CONTENT,
});

export const loadCompleteProfileImage = () => ({
  type: LOAD_COMPLETE_PROFILE_IMAGE,
});

export const setBackgroundTranslateY = (payload) => ({
  type: SET_BACKGROUND_TRANSLATEY,
  payload,
});

export const setHoverGithub = (payload) => ({
  type: SET_HOVER_GITHUB,
  payload,
});

export const setHoverResume = (payload) => ({
  type: SET_HOVER_RESUME,
  payload,
});

export const setContentAnimating = (payload) => ({
  type: SET_CONTENT_ANIMATING,
  payload,
});

export const wiggle = (payload) => ({
   type: WIGGLE,
   payload,
});
