import { createStore } from 'vuex';

export default createStore({
  state: {
    attachmentPreview: null,
  },
  mutations: {
    SET_ATTACHMENT_PREVIEW(state, url) {
      state.attachmentPreview = url;
    },
  },
  actions: {
    createAttachmentPreview({ commit }, url) {
      commit('SET_ATTACHMENT_PREVIEW', url);
    },
  },
  modules: {
  },
  getters: {
    attachmentPreview: (state) => state.attachmentPreview,
  },
});
