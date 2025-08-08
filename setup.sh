#!/bin/bash

echo "🚀 Setting up tumblrpx..."

# Check if config.js already exists
if [ -f "src/config.js" ]; then
    echo "⚠️  src/config.js already exists. Skipping..."
else
    echo "📝 Creating config.js from template..."
    cp src/config.example.js src/config.js
    echo "✅ Created src/config.js"
    echo "📝 Please edit src/config.js and add your Tumblr API key"
    echo "🔗 Get your API key from: https://www.tumblr.com/oauth/apps"
fi

echo "📦 Installing dependencies..."
npm install

echo "🎉 Setup complete!"
echo "💡 Next steps:"
echo "   1. Edit src/config.js and add your Tumblr API key"
echo "   2. Run 'npm run dev' to start the development server"
echo "   3. Open http://localhost:3000 in your browser"
