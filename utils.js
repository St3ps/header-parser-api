
module.exports = {
    
    formatHeader : function(reqhdr) {
        
        var hdr = {
        
        ip : reqhdr['x-forwarded-for'],
        //get only the language substring of the 'accept-language' key
        language : reqhdr['accept-language'].substring(0, reqhdr['accept-language'].indexOf(',')), 
        //get only the os substring of the 'user-agent' key
        os : reqhdr['user-agent'].substring(reqhdr['user-agent'].indexOf('(') + 1,reqhdr['user-agent'].indexOf(';'))
        
        }
        
        return hdr;
        
        
    }
    
}