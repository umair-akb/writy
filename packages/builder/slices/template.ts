import { createSlice } from "@reduxjs/toolkit";
import hydrate from "lib/hydrate";
import Template from "types/template";

interface IInitialState {
  template: Template;
  loading: string;
  error: any;
}

const initialState: IInitialState = {
  template: {
    meta: {},
    sections: [],
  },
  loading: "idle",
  error: null,
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateData(state, action) {
      if (state.loading === "idle") {
        state.loading = "fulfilled";
        state.template = action.payload;
      }
    },
    updateTemplateSectionMeta(state, action) {
      state.template.sections[action.payload.positionOfSection].meta[
        action.payload.itemType
      ] = action.payload.value;
    },
    updateTemplateSectionTheme(state, action) {
      state.template.sections[action.payload.positionOfSection].theme[
        action.payload.key
      ] = action.payload.value;
    },
    addTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ].push(action.payload.value);
    },
    updateTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ][action.payload.itemPosition][action.payload.key] = action.payload.value;
    },
    removeTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ].splice(action.payload.itemPosition, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...(action.payload as any)[templateSlice.name],
      };
    });
  },
});

export const {
  setTemplateData,
  updateTemplateSectionMeta,
  updateTemplateSectionTheme,
  addTemplateSectionData,
  updateTemplateSectionData,
  removeTemplateSectionData,
} = templateSlice.actions;