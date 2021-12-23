import { createStore } from 'vuex';

export default createStore({
  state: {
    attachmentPreview: null,
    uploading: false,
    error: null,
  },
  mutations: {
    SET_ATTACHMENT_PREVIEW(state, url) {
      state.attachmentPreview = url;
    },
    SET_UPLOADING_STATUS(state, status) {
      state.uploading = status;
    },
  },
  actions: {
    setAttachmentUrl({ commit }, url) {
      commit('SET_ATTACHMENT_PREVIEW', url);
    },
    upload({ commit }) {
      commit('SET_UPLOADING_STATUS', true);
    },
  },
  modules: {
  },
  getters: {
    attachmentPreview: (state) => state.attachmentPreview,
    uploading: (state) => state.uploading,
    error: (state) => state.error,
  },
});
