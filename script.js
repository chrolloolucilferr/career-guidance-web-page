// Question bank - each with varied formulations of similar questions
const questionBank = [
    {
        variants: [
            "Which activity do you enjoy the most during your free time?",
            "When you have free time, which of these activities appeals to you most?",
            "If you could choose one activity to do when you're not studying, what would it be?",
            "Which leisure activity gives you the most satisfaction?"
        ],
        options: [
            [
                { text: "Solving puzzles or brain teasers", scienceAffinity: 3 },
                { text: "Reading fiction books", scienceAffinity: 1 },
                { text: "Playing sports or physical activities", scienceAffinity: 1 },
                { text: "Creating art or craft projects", scienceAffinity: 0 }
            ],
            [
                { text: "Experimenting with gadgets", scienceAffinity: 3 },
                { text: "Writing stories or poems", scienceAffinity: 0 },
                { text: "Organizing events with friends", scienceAffinity: 1 },
                { text: "Watching documentaries", scienceAffinity: 2 }
            ],
            [
                { text: "Building models or structures", scienceAffinity: 2 },
                { text: "Cooking or trying new recipes", scienceAffinity: 1 },
                { text: "Coding or programming", scienceAffinity: 3 },
                { text: "Debating with friends on social issues", scienceAffinity: 1 }
            ],
            [
                { text: "Conducting small experiments", scienceAffinity: 3 },
                { text: "Playing musical instruments", scienceAffinity: 1 },
                { text: "Managing finances or budgeting", scienceAffinity: 2 },
                { text: "Volunteering for community service", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "Which school subject do you find most engaging?",
            "In which subject do you typically perform your best?",
            "If you could only study one subject for a whole day, which would you choose?",
            "Which class do you look forward to the most during school?"
        ],
        options: [
            [
                { text: "Mathematics", scienceAffinity: 3 },
                { text: "Literature", scienceAffinity: 0 },
                { text: "Physical Education", scienceAffinity: 1 },
                { text: "History", scienceAffinity: 0 }
            ],
            [
                { text: "Physics or Chemistry", scienceAffinity: 3 },
                { text: "Languages", scienceAffinity: 0 },
                { text: "Business Studies", scienceAffinity: 1 },
                { text: "Art or Music", scienceAffinity: 0 }
            ],
            [
                { text: "Biology", scienceAffinity: 3 },
                { text: "Social Sciences", scienceAffinity: 1 },
                { text: "Computer Science", scienceAffinity: 2 },
                { text: "Geography", scienceAffinity: 1 }
            ],
            [
                { text: "Chemistry experiments", scienceAffinity: 3 },
                { text: "Creative Writing", scienceAffinity: 0 },
                { text: "Economics", scienceAffinity: 1 },
                { text: "Drama or Theater", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "How do you approach solving complex problems?",
            "When faced with a difficult challenge, what's your typical approach?",
            "What strategy do you use when tackling complicated issues?",
            "How would you describe your problem-solving style?"
        ],
        options: [
            [
                { text: "Break it down into smaller, logical steps", scienceAffinity: 3 },
                { text: "Trust my intuition and creativity", scienceAffinity: 1 },
                { text: "Discuss with others to get different perspectives", scienceAffinity: 1 },
                { text: "Look for patterns from past experiences", scienceAffinity: 2 }
            ],
            [
                { text: "Research thoroughly before attempting a solution", scienceAffinity: 2 },
                { text: "Try different approaches until something works", scienceAffinity: 1 },
                { text: "Use systematic trial and error", scienceAffinity: 3 },
                { text: "Follow my emotional response to the situation", scienceAffinity: 0 }
            ],
            [
                { text: "Apply mathematical or scientific principles", scienceAffinity: 3 },
                { text: "Draw inspiration from artistic sources", scienceAffinity: 0 },
                { text: "Consider the human impact of each solution", scienceAffinity: 1 },
                { text: "Use practical, hands-on experimentation", scienceAffinity: 2 }
            ],
            [
                { text: "Create data-driven models to predict outcomes", scienceAffinity: 3 },
                { text: "Rely on communication skills to find answers", scienceAffinity: 1 },
                { text: "Focus on the most efficient solution", scienceAffinity: 2 },
                { text: "Look for creative, unconventional answers", scienceAffinity: 1 }
            ]
        ]
    },
    {
        variants: [
            "Which career outcome matters most to you?",
            "When thinking about your future career, what do you value most?",
            "What aspect of a potential career is most important to you?",
            "Which of these job characteristics would you prioritize?"
        ],
        options: [
            [
                { text: "Making significant discoveries or innovations", scienceAffinity: 3 },
                { text: "Helping others directly", scienceAffinity: 1 },
                { text: "Expressing myself creatively", scienceAffinity: 0 },
                { text: "Financial stability and security", scienceAffinity: 2 }
            ],
            [
                { text: "Solving complex technical challenges", scienceAffinity: 3 },
                { text: "Leading teams and organizations", scienceAffinity: 1 },
                { text: "Working in diverse international environments", scienceAffinity: 1 },
                { text: "Having work-life balance", scienceAffinity: 1 }
            ],
            [
                { text: "Contributing to technological advancement", scienceAffinity: 3 },
                { text: "Building meaningful connections with others", scienceAffinity: 0 },
                { text: "Having autonomy and independence", scienceAffinity: 2 },
                { text: "Creating beautiful or entertaining content", scienceAffinity: 0 }
            ],
            [
                { text: "Working with cutting-edge technologies", scienceAffinity: 3 },
                { text: "Making a positive social impact", scienceAffinity: 1 },
                { text: "Having opportunities for constant learning", scienceAffinity: 2 },
                { text: "Achieving recognition for my work", scienceAffinity: 1 }
            ]
        ]
    },
    {
        variants: [
            "How would your friends describe your strengths?",
            "What would others say is your greatest strength?",
            "Which of these traits do people often compliment you on?",
            "What quality do others most appreciate about you?"
        ],
        options: [
            [
                { text: "Logical thinking and analytical skills", scienceAffinity: 3 },
                { text: "Creativity and artistic talents", scienceAffinity: 0 },
                { text: "Leadership and decision-making", scienceAffinity: 1 },
                { text: "Empathy and understanding", scienceAffinity: 0 }
            ],
            [
                { text: "Attention to detail and precision", scienceAffinity: 2 },
                { text: "Communication and persuasion skills", scienceAffinity: 1 },
                { text: "Technical abilities and problem-solving", scienceAffinity: 3 },
                { text: "Adaptability and flexibility", scienceAffinity: 1 }
            ],
            [
                { text: "Mathematical or scientific aptitude", scienceAffinity: 3 },
                { text: "Artistic expression or design sense", scienceAffinity: 0 },
                { text: "People skills and networking ability", scienceAffinity: 1 },
                { text: "Practical skills and resourcefulness", scienceAffinity: 1 }
            ],
            [
                { text: "Curiosity and desire to understand how things work", scienceAffinity: 3 },
                { text: "Imagination and creative thinking", scienceAffinity: 1 },
                { text: "Organization and planning abilities", scienceAffinity: 2 },
                { text: "Compassion and care for others", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "Which type of news or current events interests you most?",
            "What category of news do you find yourself most drawn to?",
            "If you could only follow one news category, which would it be?",
            "Which current events topics capture your attention the most?"
        ],
        options: [
            [
                { text: "Scientific discoveries and technological innovations", scienceAffinity: 3 },
                { text: "Arts, entertainment, and cultural events", scienceAffinity: 0 },
                { text: "Business, markets, and economic trends", scienceAffinity: 1 },
                { text: "Social issues and humanitarian causes", scienceAffinity: 1 }
            ],
            [
                { text: "Medical breakthroughs and health research", scienceAffinity: 3 },
                { text: "Politics and government policies", scienceAffinity: 1 },
                { text: "Sports and athletic achievements", scienceAffinity: 0 },
                { text: "Environment and conservation efforts", scienceAffinity: 2 }
            ],
            [
                { text: "Space exploration and astronomy", scienceAffinity: 3 },
                { text: "Literature and publishing", scienceAffinity: 0 },
                { text: "Education and academic developments", scienceAffinity: 2 },
                { text: "Fashion and lifestyle trends", scienceAffinity: 0 }
            ],
            [
                { text: "AI and computing advancements", scienceAffinity: 3 },
                { text: "International relations and global politics", scienceAffinity: 1 },
                { text: "Architecture and design innovations", scienceAffinity: 1 },
                { text: "Celebrity news and entertainment industry", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "How do you prefer to learn new information?",
            "Which learning method helps you understand concepts best?",
            "When trying to master new material, which approach works best for you?",
            "What's your preferred way of acquiring new knowledge?"
        ],
        options: [
            [
                { text: "Through systematic study and practice problems", scienceAffinity: 3 },
                { text: "By discussing and debating with others", scienceAffinity: 1 },
                { text: "Through hands-on experiences and activities", scienceAffinity: 2 },
                { text: "By creating visual representations or art", scienceAffinity: 0 }
            ],
            [
                { text: "By conducting experiments and observing results", scienceAffinity: 3 },
                { text: "Through reading and self-study", scienceAffinity: 2 },
                { text: "By teaching concepts to others", scienceAffinity: 1 },
                { text: "Through storytelling and narrative", scienceAffinity: 0 }
            ],
            [
                { text: "Using mathematical models and formulas", scienceAffinity: 3 },
                { text: "Through creative projects and applications", scienceAffinity: 1 },
                { text: "By observing experts and mentors", scienceAffinity: 2 },
                { text: "Through collaborative group work", scienceAffinity: 1 }
            ],
            [
                { text: "By analyzing data and finding patterns", scienceAffinity: 3 },
                { text: "Through multimedia and interactive content", scienceAffinity: 1 },
                { text: "By connecting new ideas to existing knowledge", scienceAffinity: 2 },
                { text: "Through emotional connection to the material", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "What kind of books or content do you enjoy reading?",
            "If you were to choose one genre to read for a month, what would it be?",
            "Which reading material do you find most engaging?",
            "What type of literature appeals to you most?"
        ],
        options: [
            [
                { text: "Scientific journals and research papers", scienceAffinity: 3 },
                { text: "Novels and fiction stories", scienceAffinity: 0 },
                { text: "Business and leadership books", scienceAffinity: 1 },
                { text: "Philosophy and humanities texts", scienceAffinity: 1 }
            ],
            [
                { text: "Books about mathematics, physics, or chemistry", scienceAffinity: 3 },
                { text: "Biographies and historical accounts", scienceAffinity: 1 },
                { text: "Self-help and personal development", scienceAffinity: 1 },
                { text: "Poetry and creative writing", scienceAffinity: 0 }
            ],
            [
                { text: "Technology magazines and blogs", scienceAffinity: 3 },
                { text: "Travel and adventure stories", scienceAffinity: 1 },
                { text: "Political analysis and current affairs", scienceAffinity: 1 },
                { text: "Art books and design magazines", scienceAffinity: 0 }
            ],
            [
                { text: "Popular science books that explain complex phenomena", scienceAffinity: 3 },
                { text: "Fantasy and science fiction", scienceAffinity: 1 },
                { text: "Psychology and human behavior studies", scienceAffinity: 2 },
                { text: "Comic books and graphic novels", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "Which of these historical figures do you find most inspiring?",
            "If you could meet one of these historical personalities, who would it be?",
            "Whose life story from history do you find most fascinating?",
            "Which historical character would you want to learn more about?"
        ],
        options: [
            [
                { text: "Albert Einstein or Marie Curie", scienceAffinity: 3 },
                { text: "William Shakespeare or Jane Austen", scienceAffinity: 0 },
                { text: "Mahatma Gandhi or Martin Luther King Jr.", scienceAffinity: 1 },
                { text: "Leonardo da Vinci or Michelangelo", scienceAffinity: 1 }
            ],
            [
                { text: "Isaac Newton or Nikola Tesla", scienceAffinity: 3 },
                { text: "Amelia Earhart or Neil Armstrong", scienceAffinity: 2 },
                { text: "Steve Jobs or Bill Gates", scienceAffinity: 2 },
                { text: "Beethoven or Mozart", scienceAffinity: 0 }
            ],
            [
                { text: "Charles Darwin or Stephen Hawking", scienceAffinity: 3 },
                { text: "Florence Nightingale or Mother Teresa", scienceAffinity: 1 },
                { text: "Aristotle or Plato", scienceAffinity: 2 },
                { text: "Picasso or Van Gogh", scienceAffinity: 0 }
            ],
            [
                { text: "Carl Sagan or Richard Feynman", scienceAffinity: 3 },
                { text: "Nelson Mandela or Abraham Lincoln", scienceAffinity: 1 },
                { text: "Alexander the Great or Genghis Khan", scienceAffinity: 1 },
                { text: "Coco Chanel or Walt Disney", scienceAffinity: 0 }
            ]
        ]
    },
    {
        variants: [
            "Which of these challenges would you find most intellectually stimulating?",
            "What type of complex problem would you enjoy solving the most?",
            "Which of these intellectual challenges appeals to you most?",
            "If you had to solve one of these problems, which would you choose?"
        ],
        options: [
            [
                { text: "Discovering a mathematical formula to predict patterns", scienceAffinity: 3 },
                { text: "Creating a moving piece of art or literature", scienceAffinity: 0 },
                { text: "Resolving a conflict between groups of people", scienceAffinity: 1 },
                { text: "Designing a more efficient system or process", scienceAffinity: 2 }
            ],
            [
                { text: "Finding a cure for a previously incurable disease", scienceAffinity: 3 },
                { text: "Building a successful business from scratch", scienceAffinity: 1 },
                { text: "Composing music that moves people emotionally", scienceAffinity: 0 },
                { text: "Developing a more sustainable way of living", scienceAffinity: 2 }
            ],
            [
                { text: "Creating new technology that changes how we live", scienceAffinity: 3 },
                { text: "Writing a novel that captures the human experience", scienceAffinity: 0 },
                { text: "Reforming a social system to make it more equitable", scienceAffinity: 1 },
                { text: "Exploring uncharted territories or environments", scienceAffinity: 2 }
            ],
            [
                { text: "Understanding the fundamental laws of the universe", scienceAffinity: 3 },
                { text: "Leading a team to achieve a seemingly impossible goal", scienceAffinity: 1 },
                { text: "Preserving endangered cultural traditions", scienceAffinity: 0 },
                { text: "Solving complex logistical problems", scienceAffinity: 2 }
            ]
        ]
    }
];

// Career recommendation paths based on science affinity
// Question bank remains the same - it's well structured with various questions and options

// Updated career recommendation system based on science affinity score
const careerRecommendations = [
    {
        title: "Science Stream",
        getDescription: (strengths) => {
            const descriptions = [
                `Your responses show a strong aptitude for analytical thinking and problem-solving. You seem to enjoy ${strengths[0]} and ${strengths[1]}, which are valuable traits for success in science-related fields.`,
                `With your interest in ${strengths[0]} and ability in ${strengths[1]}, the Science stream would be an excellent match for your natural inclinations.`,
                `Your preference for ${strengths[0]} combined with your strength in ${strengths[1]} indicates you would thrive in scientific disciplines that require logical reasoning and systematic approaches.`
            ];
            return descriptions[Math.floor(Math.random() * descriptions.length)];
        },
        matchThreshold: 65, // Requires actual high science affinity
        recommendations: [
            "Take Physics, Chemistry, and Mathematics in your 11th and 12th grade",
            "Explore additional courses in Biology, Computer Science, or Electronics based on your specific interests",
            "Participate in science competitions and olympiads to enhance your skills",
            "Consider pursuing engineering, medicine, research, or technology-related degrees after 12th grade",
            "Join science clubs or groups to connect with like-minded peers"
        ],
        strengths: [
            "analytical thinking",
            "problem-solving",
            "mathematical reasoning",
            "scientific curiosity",
            "experimental approaches",
            "logical analysis",
            "systematic study",
            "technical understanding"
        ]
    },
    {
        title: "Commerce with Mathematics",
        getDescription: (strengths) => {
            const descriptions = [
                `Your profile shows a balanced mix of analytical abilities and practical thinking. Your strengths in ${strengths[0]} and ${strengths[1]} would be valuable in commerce fields.`,
                `With your interest in ${strengths[0]} and skill in ${strengths[1]}, Commerce with Mathematics would give you the quantitative foundation while applying concepts to real-world scenarios.`,
                `Your aptitude for ${strengths[0]} and ${strengths[1]} suggests you would excel in areas that combine numerical analysis with practical business applications.`
            ];
            return descriptions[Math.floor(Math.random() * descriptions.length)];
        },
        matchThreshold: 40, // Medium science affinity
        recommendations: [
            "Consider taking Commerce with Mathematics in 11th and 12th grade",
            "Explore electives in Business Studies, Economics, and Accountancy",
            "Look into fields like Economics, Finance, Business Analytics, or Actuarial Science",
            "Develop both quantitative and communication skills",
            "Participate in business competitions and case studies"
        ],
        strengths: [
            "quantitative analysis",
            "practical thinking",
            "organizational skills",
            "financial aptitude",
            "strategic planning",
            "data interpretation",
            "logical reasoning",
            "balanced approach"
        ]
    },
    {
        title: "Arts or Humanities",
        getDescription: (strengths) => {
            const descriptions = [
                `Your responses reveal strengths in ${strengths[0]} and ${strengths[1]}. These qualities are particularly valuable in humanities and arts-related disciplines.`,
                `With your natural inclination toward ${strengths[0]} and ${strengths[1]}, you would likely find fulfillment in fields that value creative expression and human understanding.`,
                `Your preference for ${strengths[0]} combined with your strength in ${strengths[1]} suggests you would excel in disciplines that explore human experiences and expression.`
            ];
            return descriptions[Math.floor(Math.random() * descriptions.length)];
        },
        matchThreshold: 0, // Lower science affinity
        recommendations: [
            "Consider pursuing Arts or Humanities in 11th and 12th grade",
            "Explore subjects like Literature, History, Psychology, or Political Science",
            "Develop your writing, critical thinking, and analytical skills",
            "Look into careers in law, journalism, psychology, education, or creative fields",
            "Participate in debates, model UN, or literary events"
        ],
        strengths: [
            "creative thinking",
            "communication skills",
            "emotional intelligence",
            "artistic expression",
            "social awareness",
            "narrative understanding",
            "cultural appreciation",
            "interpersonal skills"
        ]
    }
];

// Global variables
let currentQuestionIndex = 0;
let totalQuestions = 10; // We'll randomly select 10 questions from the question bank
let scienceAffinityScore = 0;
let selectedQuestions = [];
let userResponses = []; // Track the actual responses
let userSeed = Math.floor(Math.random() * 10000); // Random seed for each user

// Pseudorandom function based on user seed
function pseudoRandom() {
    userSeed = (userSeed * 9301 + 49297) % 233280;
    return userSeed / 233280;
}

// Select random subset of questions
function selectRandomQuestions() {
    try {
        console.log("Selecting random questions...");
        let indices = [...Array(questionBank.length).keys()];
        let selectedIndices = [];
        
        // Shuffle indices using Fisher-Yates algorithm with our pseudorandom function
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(pseudoRandom() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Select first 'totalQuestions' indices
        selectedIndices = indices.slice(0, Math.min(totalQuestions, indices.length));
        
        // Create the selected questions array
        selectedQuestions = []; // Reset the array
        for (let i = 0; i < selectedIndices.length; i++) {
            const questionIndex = selectedIndices[i];
            const variantIndex = Math.floor(pseudoRandom() * questionBank[questionIndex].variants.length);
            const optionSetIndex = Math.floor(pseudoRandom() * questionBank[questionIndex].options.length);
            
            selectedQuestions.push({
                questionText: questionBank[questionIndex].variants[variantIndex],
                options: questionBank[questionIndex].options[optionSetIndex],
                category: questionIndex // Keep track of which category this question belongs to
            });
        }
        console.log("Selected questions:", selectedQuestions.length);
    } catch (error) {
        console.error("Error in selectRandomQuestions:", error);
    }
}

function displayQuestion() {
    try {
        console.log("Displaying question...");
        const questionContainer = document.getElementById('question-screen');
        const resultsScreen = document.getElementById('results-screen');
        
        if (!questionContainer || !resultsScreen) {
            console.error("Required elements not found!");
            return;
        }
        
        resultsScreen.style.display = 'none';
        questionContainer.style.display = 'block';
        
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        if (!questionText || !optionsContainer || !progressBar || !progressText) {
            console.error("Question elements not found!");
            return;
        }
        
        // Update question text
        questionText.textContent = selectedQuestions[currentQuestionIndex].questionText;
        
        // Update progress
        const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Add new options
        const currentOptions = selectedQuestions[currentQuestionIndex].options;
        currentOptions.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => selectOption(option));
            optionsContainer.appendChild(optionElement);
        });
        
        console.log("Question displayed successfully!");
    } catch (error) {
        console.error("Error in displayQuestion:", error);
    }
}

// Handle option selection - now storing the full response
function selectOption(option) {
    // Add to science affinity score
    scienceAffinityScore += option.scienceAffinity;
    
    // Store the user's response
    userResponses.push({
        questionIndex: selectedQuestions[currentQuestionIndex].category,
        response: option.text,
        scienceAffinity: option.scienceAffinity
    });
    
    // Move to next question or show results
    currentQuestionIndex++;
    
    if (currentQuestionIndex < Math.min(totalQuestions, selectedQuestions.length)) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Analyze user responses to find patterns and strengths
function analyzeResponses() {
    // Find which response categories had the highest science affinity
    const categoryScores = {};
    const responseTexts = {};
    
    userResponses.forEach(response => {
        if (!categoryScores[response.questionIndex]) {
            categoryScores[response.questionIndex] = 0;
            responseTexts[response.questionIndex] = [];
        }
        categoryScores[response.questionIndex] += response.scienceAffinity;
        responseTexts[response.questionIndex].push(response.response);
    });
    
    // Sort categories by score
    const sortedCategories = Object.keys(categoryScores).sort(
        (a, b) => categoryScores[b] - categoryScores[a]
    );
    
    // Extract key strengths based on highest scoring responses
    const highestResponses = userResponses
        .sort((a, b) => b.scienceAffinity - a.scienceAffinity)
        .slice(0, 3)
        .map(r => r.response);
    
    return {
        topCategories: sortedCategories.slice(0, 3),
        topResponses: highestResponses,
        categoryScores,
        responseTexts
    };
}

// Show results
function showResults() {
    const questionContainer = document.getElementById('question-screen');
    const resultsContainer = document.getElementById('results-screen');
    
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Calculate percentage score
    const maxPossibleScore = totalQuestions * 3; // 3 is max affinity per question
    const scienceAffinityPercentage = (scienceAffinityScore / maxPossibleScore) * 100;
    
    // Analyze user responses
    const analysis = analyzeResponses();
    
    // Determine career recommendation based on science affinity
    let careerRecommendation;
    
    // IMPORTANT CHANGE: Now using actual affinity score to recommend streams
    if (scienceAffinityPercentage >= careerRecommendations[0].matchThreshold) {
        careerRecommendation = careerRecommendations[0]; // Science Stream
    } else if (scienceAffinityPercentage >= careerRecommendations[1].matchThreshold) {
        careerRecommendation = careerRecommendations[1]; // Commerce with Mathematics
    } else {
        careerRecommendation = careerRecommendations[2]; // Arts or Humanities
    }
    
    // Extract relevant strengths based on the recommended stream
    const streamStrengths = careerRecommendation.strengths;
    // Randomly select two strengths to personalize the description
    const selectedStrengths = [];
    while (selectedStrengths.length < 2) {
        const index = Math.floor(Math.random() * streamStrengths.length);
        if (!selectedStrengths.includes(streamStrengths[index])) {
            selectedStrengths.push(streamStrengths[index]);
        }
    }
    
    // Update results in the UI
    const careerTitle = document.getElementById('career-title');
    const matchPercentage = document.getElementById('match-percentage');
    const careerDescription = document.getElementById('career-description');
    const recommendationList = document.getElementById('recommendation-list');
    
    careerTitle.textContent = careerRecommendation.title;
    
    // Calculate authentic match percentage based on affinity
    let matchScore;
    if (careerRecommendation.title === "Science Stream") {
        matchScore = Math.round(scienceAffinityPercentage);
    } else if (careerRecommendation.title === "Commerce with Mathematics") {
        // For commerce, highest match when score is in the middle range
        const distanceFromIdeal = Math.abs(scienceAffinityPercentage - 50);
        matchScore = Math.round(85 - distanceFromIdeal);
    } else {
        // For arts, highest match when science score is low
        matchScore = Math.round(95 - scienceAffinityPercentage);
    }
    
    // Ensure match is within reasonable bounds
    matchScore = Math.max(60, Math.min(95, matchScore));
    matchPercentage.textContent = matchScore;
    
    // Generate personalized description
    careerDescription.textContent = careerRecommendation.getDescription(selectedStrengths);
    
    // Clear previous recommendations
    recommendationList.innerHTML = '';
    
    // Add new recommendations
    careerRecommendation.recommendations.forEach(recommendation => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        recommendationList.appendChild(li);
    });
}

// Reset quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    scienceAffinityScore = 0;
    selectedQuestions = [];
    userResponses = [];
    userSeed = Math.floor(Math.random() * 10000); // New seed for different questions
    
    selectRandomQuestions();
    displayQuestion();
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    const restartButton = document.getElementById('restart-btn');
    if (restartButton) {
        restartButton.addEventListener('click', resetQuiz);
    }
    
    // Since we're on the start.html page, we should immediately start the quiz
    selectRandomQuestions();
    displayQuestion();
});