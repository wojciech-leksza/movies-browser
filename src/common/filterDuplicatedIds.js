const filterDuplicatedIds = (array) => { 
      const uniqueIds = [];
      
      const unique = array.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
      
        if (!isDuplicate) {
          uniqueIds.push(element.id);
      
          return true;
        };
      
        return false;
      });

      return(unique);
};

export default filterDuplicatedIds;