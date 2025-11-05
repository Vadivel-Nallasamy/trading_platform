import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  userId: "",
  loginStage: "userVerification",
  accessToken:
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXWUE0U3VYenBkV0JXSlBiLUxWTm9HOElDemVUc3d3ajlVeFQ0alhCeUx3In0.eyJleHAiOjE3OTMxMzEyMjcsImlhdCI6MTc2MjM3MjgyNywianRpIjoib25ydHJvOmI0OTMxZjkxLWFkZDQtOWYwMC05MWJkLTY3NjIwMGY4ZTYxYiIsImlzcyI6Imh0dHBzOi8vaWRhYXN1YXQuYXNoaWthZ3JvdXAuY29tL2lkYWFzL3JlYWxtcy9hc2hpa2EiLCJzdWIiOiIxYTE1NTg4Zi01NjMyLTRlNmQtYjQ1ZC01NmU3YjM3NjZhMWUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhc2hpa2EiLCJzaWQiOiJjODdhZTA1My1jYTI0LTQzNDQtYWU4NC01YWM5M2FkMzM1NjQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtYXNoaWthIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYXNoaWthIjp7InJvbGVzIjpbIkdVRVNUX1VTRVIiLCJBQ1RJVkVfVVNFUiIsIkFkbWluIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJ1Y2MiOiJJTlZDTElFTlQ1IiwiY2xpZW50Um9sZSI6WyJHVUVTVF9VU0VSIiwiQUNUSVZFX1VTRVIiLCJBZG1pbiJdLCJuYW1lIjoiU3VkaGFuIFkiLCJtb2JpbGUiOiI5Mzg0Mjc0MzA3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaW52Y2xpZW50NSIsImdpdmVuX25hbWUiOiJTdWRoYW4iLCJmYW1pbHlfbmFtZSI6IlkiLCJlbWFpbCI6InN1ZGhhcnN1bkBjb2RpZmkuaW4ifQ.ZuO6u-Yc0FWD_Rh_RfAP5ISDQOyn0_b4lWMy_yAlRHe5SCdRjasBXz_Wzg2PfLtwvIif0P8WSMkf1FpBvCFOq2pnVgWiuDUPgwkIfAbFer1asTR_oshc7Ce6wC2IYJl_Scp-NWK492g6bn6aoUEqncdzoVJtOPp8V2X5tCCen6Vk_oy4utiEw1U45sWMb5ADTZMcjixGbWUWhqzs_2fTqTrN5Pl1TIN7t7sbd28-OrrugZaM7tRYIK3U9zuvCc73gWYOPXa15CagMYN_h30mmyRADfBepOMNRpIbDPhKk6LLZLK_xpCmX-vKJhnddHLYweSNpaFAAcZ5F-nmek_l6A",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setLoginStage: (state, action) => {
      state.loginStage = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
export const { setUserId, setLoginStage, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
