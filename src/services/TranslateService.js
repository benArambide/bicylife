class TranslateService {

   static db = {
      'The email address is already in use by another account.' : 'El correo ya se encuentra en uso.'
   };

   static translate = ( data ) => {
      return TranslateService.db[data] ? TranslateService.db[data] : '';
   }
}

export default TranslateService;