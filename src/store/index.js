import { createStore } from 'vuex';

export default createStore({
  state: {
    attachmentPreview: null,
    uploading: false,
    uploaded: false,
    error: null,
  },
  mutations: {
    SET_ATTACHMENT_PREVIEW(state, url) {
      state.attachmentPreview = url;
    },
    SET_UPLOADING_STATUS(state, status) {
      state.uploading = status;
    },
    SET_UPLOADED_STATUS(state, status) {
      state.uploaded = status;
    },
  },
  actions: {
    setAttachmentUrl({ commit }, url) {
      commit('SET_ATTACHMENT_PREVIEW', url);
      if (!url) {
        commit('SET_UPLOADED_STATUS', false);
      }
    },
    upload({ commit }) {
      commit('SET_UPLOADING_STATUS', true);
      setTimeout(() => {
        commit('SET_UPLOADING_STATUS', false);
        commit('SET_UPLOADED_STATUS', true);
      }, 5000);
    },
  },
  getters: {
    attachmentPreview: (state) => state.attachmentPreview,
    uploading: (state) => state.uploading,
    uploaded: (state) => state.uploaded,
    error: (state) => state.error,
  },
});
