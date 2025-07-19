require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAE554VoB4hRNWgQAAH8HAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9l3zFbmVHIypiABG0AFHQUifmIYVkUTYzE0Q7*PcJaunqh5meGp6SXO4995xz7w9QVhlBz+gGJj9AjbMWUtQv6a1GYAK0Jo4RBgMQQQrBBJgaXr+MNWrKkrEVHLvTmf12JdOQXwSI8ucp1M7pkB3ZpvMEHgNQN8c8C38TsAvXcXs6GFWEtquF1JZQ8DRWPhVwrnWMB71YOXvpUZwF4RN49BFhhrMyMeoUFQjD*BndPJjhr8E3XNnxZrrD37QpLmO7XnRiogZ8OzIPbl2Rdihm7UsaTM3wa*CvxzYNO6l2VUKCTRYw87BL*DFdJVtmv9SmFScP5ZkxD9XVG3ySJSWK5hEqaUZvX+b95vIpruZr4bq0yus93nnmBc4c93kk6Osc33dB2Q2PJzzbKF8Drhqhe8x2GsuX9tHugrsls9pxKDORf3cPkcFdnUK+2+PLi*MrcA9*eOX8f3gvnk9VdC1z1UZVkDK6oOuOsz90SbJdaOs62JLRycLKi1N+0TZW5Un73GpiOMTy1owsK1Eb10YcZ9l5ngmMOFZ9nQ3arfEJH9IG*w7lxqvM*VDF*i5YjNSpsaDyKoicS1ztasSovl5Tx7QNUdn712KsmQWVZqVi2bp*WSPMpULTKuJJZhjL9PfmGQYnP5omT68VndFtHoEJ+xgAjJKMUAxpVpX9HifwAwCj1kchRvSVXsBYOmHmiOdM26zmrC0ns0C8HINhRNRDjJjblONOZ65dpuQJDECNqxARgiIrI7TCNwcRAhNEwOTPvwagRB19E65Px7MDEGeY0E3Z1HkFow9VPw5hGFZNSf1bGer9AmEwGX1uI0qzMiE9j00JcZhmLdJTSAmYxDAn6GeFCKMITChu0M+u1auoJ57n*J2hcgcwAMWrIFkEJoCTeFmRBJHnJXkiCX+Q79c+LKzr7yWiYABK2N8G3wqK0DcwAPnrM1ZUWFERJG4scyNl1L*sDx4*EfcJIkRhlhMwAfqznnDhdWa48uikOKapKomqJyr4rPDDKu9SOCxGG*4yvCPEF2vhsOqy4OhsD47I8C9QnHrdmvAndWbOn*4hSD80r6k5ZeNFzGhDNtlX5zoim2TGT60uaqs7DM+7oiLzg6*sWzHTPWNtkYPsok2RNHXSascw2AXO3SuTZ9UkQ39D9KPe+2oAItRmIfo1GW2iwvLuaVSHS2JcOvMsTw*bYxwXAqdh06DSdinZN2hN13y11gXGztfB1MiTQOSF0JbHOYm2XnMejhfSaeq5cLea6+qbiV+bKH8fXtmrvXrt+t84Q6+z4F2j*9TyDXhvudFj8EuM9+nyLx2qxScX8rkrtQpfUvGMzI2zP3P32UuwjClbNKu7sjm6wlVbZ+Dx+GsA6hzSuMIFmABSHCEYAFw1vYHnZVz9JpOuJnNt9VZ2DglVP5siyApEKCxqMGFlkeUVTuKkt1sermoLkrRnwGP3adw7*KbWtU8h*egxoPbfYumBx99QSwECFAMUAAAICABOeeFaAeIUTVoEAAB*BwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACCBAAAAAA=',
  BOT_ADMIN: process.env.BOT_ADMIN || '263786453367',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Mtee_xmd',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user