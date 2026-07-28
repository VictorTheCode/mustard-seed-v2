<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Stack

Use the following stack for development:

- Next.js
- React
- Tailwind CSS
- TypeScript
- PostgreSQL
- Vercel

# UI Guidelines

- Use dark mode
- Use Tailwind CSS for styling
- Use Lucide React for icons
- Use shadcn/ui for components
- Use framer motion for animations
- Do not use a for Links rather use the nextjs authorized links
- Do not use vanilla css for styling all styling must be in tailwindcss, if there is need for a vanilla styling let it be in the .css file
- For image properties use the <Image /> component from next/image
- All images are in the public/assets folder and they are imported as "/assets/filename.extension"
- For the UI, it is mobile priority before you think of desktop ensure it looks good on mobile

# Codebase Conventions

- use Tailwindcss for styling
- Ensure you use KISS principle, i dont want and long code
- Do not highlight any code that should in red color, for example if you have "undefined", "null", "NaN" do not highlight them in red color

<!-- END:nextjs-agent-rules -->
