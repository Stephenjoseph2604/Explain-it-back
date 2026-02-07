📘 Explain It Back – AI-Powered Learning Platform

Learn by explaining. Improve by feedback.

Explain It Back is an AI-powered learning platform that helps students strengthen their understanding by explaining concepts in their own words and receiving instant, personalized feedback from AI.

Instead of passive learning, this platform encourages active recall, self-assessment, and continuous improvement.

🚀 Live Demo

(Add your deployed URL here)
https://your-demo-link.com

✨ Key Highlights

🧠 AI-based explanation analysis

📊 Understanding score (0–100)

🏷️ Level indicator (Poor → Excellent)

📝 Correct & missing points breakdown

✨ AI-enhanced improved explanation

🎨 Modern dark UI with smooth animations

🧩 How It Works

Enter a Topic
Example: What are functions in Java?

Explain in Your Own Words
Students type their understanding of the concept.

Get Smart Feedback
AI evaluates the response and returns:

Score

Strengths

Knowledge gaps

Improved explanation

🎯 Why Explain It Back?

Encourages learning by explaining, not memorizing

Instant feedback without waiting for evaluations

Tracks improvement over time

Ideal for exam prep, interviews, and concept clarity

Supports both students and teachers

💡 Features
🔍 Try It Now – Analyze Your Answer

Topic input

Answer editor

AI analytics report:

Progress bar

Color-coded level badge

Correct points

Missing points

Improved explanation

💳 Pricing Plans
Plan	Price	Features
Starter	Free	Limited analyses
Student	₹299 / month	Unlimited analyses, detailed feedback
Teacher	₹999 / month	Class analytics, export reports, custom rubrics
🧑‍🏫 Applications

👩‍🎓 Self-learning students

👨‍🏫 Teachers tracking class performance

🏫 Educational institutions

🎯 Interview and exam preparation

🎨 UI & Design

🌙 Dark theme (#0F172A)

✨ Animated star background

🫧 Floating gradient spheres

🪟 Glass-morphic cards (backdrop-blur-xl)

🎥 Framer Motion animations

🎨 Purple-violet gradient accents

🛠️ Tech Stack
Frontend

React + TypeScript

Tailwind CSS

Framer Motion

Lucide React Icons

Backend / API

Axios for HTTP requests

API Endpoint: /api/explain

Request
{
  topic: string;
  answer: string;
}

Response
{
  score: number;
  feedback: {
    correctPoints?: string[];
    missingPoints?: string[];
    improvedExplanation?: string;
  };
}

📁 Project Structure
src/
│── components/
│── pages/
│   ├── Landing
│   ├── TryItNow
│   ├── Pricing
│   ├── Applications
│── api/
│── assets/
│── styles/
│── App.tsx
│── main.tsx

🔄 Usage Flow

Open Try It Now

Enter topic and explanation

Click Analyze My Answer

View score and feedback

Improve and repeat

📌 Future Enhancements

User authentication

Learning history & progress tracking

Teacher dashboard

AI comparison between attempts

Multi-language support

📄 License

This project is intended for personal and educational use.

You are free to modify and extend it, but please retain credit to the original idea.

🤝 Contributing

Contributions, ideas, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

⭐ Support

If you like this project, don’t forget to star ⭐ the repository — it really helps!
