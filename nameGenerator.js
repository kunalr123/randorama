const firstNames = [
    "John", "Jane", "Alex", "Chris", "Taylor", "Jordan", 
    "Emily", "Michael", "Sarah", "David", "Sophia", "Daniel", 
    "Emma", "James", "Olivia", "Benjamin", "Isabella", "Ethan", 
    "Charlotte", "Liam", "Amelia", "Noah", "Mia", "Lucas", 
    "Harper", "Elijah", "Ava", "Mason", "Ella", "Logan", 
    "Scarlett", "Jacob", "Aria", "Oliver", "Layla", "William", 
    "Zoey", "Henry", "Luna", "Samuel", "Chloe", "Levi", 
    "Ellie", "Sebastian", "Mila", "Matthew", "Nora", "Owen", 
    "Riley", "Jack", "Aubrey", "Luke", "Lily",
    // Indian names
    "Aarav", "Vihaan", "Aditya", "Arjun", "Ananya", "Ishaan", 
    "Diya", "Riya", "Meera", "Kavya", "Priya", "Sneha", 
    "Rahul", "Siddharth", "Rohit", "Nikhil", "Aryan", "Neha", 
    "Rakesh", "Vivek", "Manoj", "Sanjay", "Pooja", "Swati", 
    "Tanvi", "Naina", "Varun", "Rajesh", "Akash", "Ashwini", 
    "Kiran", "Ragini", "Lakshmi", "Ravi", "Mohan", "Alok", 
    "Gaurav", "Sunita", "Aditi", "Arvind", "Harsha", "Karthik"
  ];
  
  const lastNames = [
    "Smith", "Doe", "Brown", "Taylor", "Johnson", "Lee", 
    "Walker", "Harris", "Clark", "Lewis", "Young", "Hall", 
    "Allen", "Wright", "King", "Scott", "Green", "Adams", 
    "Baker", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", 
    "Turner", "Phillips", "Campbell", "Parker", "Evans", 
    "Edwards", "Collins", "Stewart", "Sanchez", "Morris", 
    "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", 
    "Bailey", "Rivera", "Cooper", "Richardson", "Cox", 
    "Howard", "Ward", "Torres", "Peterson", "Gray",
    // Indian surnames
    "Sharma", "Verma", "Gupta", "Mehta", "Kumar", "Joshi", 
    "Reddy", "Patel", "Chopra", "Malhotra", "Bansal", "Rana", 
    "Thakur", "Singh", "Yadav", "Pandey", "Iyer", "Nair", 
    "Choudhary", "Jain", "Aggarwal", "Das", "Ghosh", "Roy", 
    "Chakraborty", "Nayak", "Rao", "Pillai", "Shukla", "Dubey", 
    "Tiwari", "Mishra", "Agarwal", "Kapoor", "Bhatia", "Kohli", 
    "Mahajan", "Pathak", "Rajput", "Sethi", "Saxena", "Goel"
  ];
  
function generateName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

module.exports = generateName;