class FuzzySearch {
    // Static method to calculate similarity score based on substring match
    static getScore(a, b) {
      const maxLength = Math.max(a.length, b.length);
      let score = 0;
  
      // Basic check to match the beginning of strings
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i].toLowerCase() === b[i].toLowerCase()) {
          score++;
        }
      }
  
      // Normalize the score based on max length
      return score / maxLength;
    }
  
    // Static method to perform fuzzy search
    static search(data, query, threshold) {
      if (!query) return [];
  
      // Loop through each item and add score directly to the object
      const results = data
        .map(item => {
            console.log(item)
          const score = FuzzySearch.getScore(item.name, query);
          item.score = score; // Directly add the score to the object
          return item;
        })
        .filter(result => result.score >= threshold) // Filter based on threshold
        .sort((a, b) => b.score - a.score); // Sort by score (highest first)
  
      return results; // Return objects with appended score
    }
  }

  