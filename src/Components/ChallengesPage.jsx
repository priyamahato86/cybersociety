import React, { useState } from 'react';
import { Heart, Flag, Clock, BarChart3 } from 'lucide-react';

const ChallengesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const stats = {
    total: 443,
    easy: 153,
    medium: 203,
    hard: 87
  };

  const fiveMinuteChallenges = [
    { id: 1, name: 'Corridor', difficulty: 'Easy', time: '5 mins', icon: '🏰' },
    { id: 2, name: 'Lo-Fi', difficulty: 'Easy', time: '5 mins', icon: '🎧', description: 'Check out our new cloud service, Authentication Anywhere. Can you find other user\'s secrets?' },
    { id: 3, name: 'MD2PDF', difficulty: 'Easy', time: '5 mins', icon: '📄' }
  ];

  const easyChallenges = [
    { id: 4, name: 'Crack the hash', difficulty: 'Easy', time: '45 mins', icon: '🐙' },
    { id: 5, name: 'Fowsniff CTF', difficulty: 'Easy', time: '45 mins', icon: '🦅' },
    { id: 6, name: 'Pickle Rick', difficulty: 'Easy', time: '30 mins', icon: '🥒', featured: true },
    { id: 7, name: 'HeartBleed', difficulty: 'Easy', time: '60 mins', icon: '❤️' }
  ];

  const mediumChallenges = [
    { id: 8, name: 'Mr Robot CTF', difficulty: 'Medium', time: '30 mins', icon: '🤖' },
    { id: 9, name: 'GoldenEye', difficulty: 'Medium', time: '75 mins', icon: '👁️' },
    { id: 10, name: 'UltraTech', difficulty: 'Medium', time: '75 mins', icon: '💻', description: 'The basics of Penetration Testing, Enumeration, Privilege Escalation and WebApp testing', tags: ['Linux', 'Web'] },
    { id: 11, name: 'StuxCTF', difficulty: 'Medium', time: '75 mins', icon: '🕵️' }
  ];

  const hardChallenges = [
    { id: 12, name: 'Jurassic Park', difficulty: 'Hard', time: '90 mins', icon: '🦖' },
    { id: 13, name: 'Forensics', difficulty: 'Hard', time: '60 mins', icon: '🔍' },
    { id: 14, name: 'Brainpan 1', difficulty: 'Hard', time: '120 mins', icon: '🧠' },
    { id: 15, name: 'Adventure Time', difficulty: 'Hard', time: '120 mins', icon: '🗡️' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-blue-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const ChallengeCard = ({ challenge, size = 'normal' }) => (
    <div className="bg-black border border-gray-800 rounded-lg hover:border-gray-600 transition-all p-6 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-3xl group-hover:border-gray-600 transition-colors">
            {challenge.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg text-white mb-1">{challenge.name}</h3>
            {challenge.description && (
              <p className="text-sm text-gray-400 mt-1">{challenge.description}</p>
            )}
          </div>
        </div>
        <button className="text-gray-600 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Flag className="w-4 h-4" />
          <span>CTF</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart3 className="w-4 h-4" />
          <span className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{challenge.time}</span>
        </div>
      </div>

      {challenge.tags && (
        <div className="flex gap-2 mt-3">
          {challenge.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const FeaturedChallenge = ({ challenge }) => (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2 text-white">{challenge.name}</h2>
          <p className="text-gray-400 mb-4">A Rick and Morty CTF. Help turn Rick back into a human!</p>
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-400">{challenge.difficulty}</span>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            ⚡ Log In and Play Now
          </button>
        </div>
        <div className="w-64 h-48 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-6xl shadow-lg shadow-green-500/20">
          {challenge.icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Challenges</h1>
          <div className="flex items-center gap-12">
            <div>
              <div className="text-6xl font-bold text-white">{stats.total}</div>
              <div className="text-gray-500">/{stats.total} Challenges</div>
            </div>
            <div className="border-l border-gray-800 pl-8">
              <div className="text-4xl font-bold text-white">{stats.easy}</div>
              <div className="text-green-400">Easy Challenges</div>
            </div>
            <div className="border-l border-gray-800 pl-8">
              <div className="text-4xl font-bold text-white">{stats.medium}</div>
              <div className="text-blue-400">Medium Challenges</div>
            </div>
            <div className="border-l border-gray-800 pl-8">
              <div className="text-4xl font-bold text-white">{stats.hard}</div>
              <div className="text-red-400">Hard Challenges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Find content by a keyword..."
            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white placeholder-gray-500"
          />
          <div className="flex gap-4">
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600">
              <option>Type</option>
            </select>
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600">
              <option>Sort by</option>
            </select>
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600">
              <option>Difficulty</option>
            </select>
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600">
              <option>Status</option>
            </select>
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600">
              <option>Subscription type</option>
            </select>
          </div>
        </div>

        {/* Featured Challenge */}
        <FeaturedChallenge challenge={easyChallenges[2]} />

        {/* 5 Minute Hacks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-white">5 minute hacks</h2>
          <p className="text-gray-400 mb-6">Find the weak spot and you're done. These are quick wins with a clear path and minimal resistance.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiveMinuteChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-300">
              Show More
            </button>
          </div>
        </section>

        {/* Easy Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-white">Easy Challenges</h2>
          <p className="text-gray-400 mb-6">Simple flaws hiding in plain sight! Just a couple of steps using well-known techniques or typical slip-ups to get there.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {easyChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-300">
              Show More
            </button>
          </div>
        </section>

        {/* Medium Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-white">Medium Challenges</h2>
          <p className="text-gray-400 mb-6">You'll need a solid grasp of the basics to uncover and connect the pieces across a few steps. Requires some digging and thoughtful execution!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediumChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-300">
              Show More
            </button>
          </div>
        </section>

        {/* Hard Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-white">Hard Challenges</h2>
          <p className="text-gray-400 mb-6">A layered challenge with little guidance full of chained vulnerabilities that demand sharp reasoning. Don't count on too many hints!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-300">
              Show More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChallengesPage;