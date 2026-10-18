// Renders plain text: blank lines separate blocks, blocks of "- " lines become lists.
function RichText({ text, className = '' }: { text: string; className?: string }) {
  const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean)

  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, index) => {
        const lines = block.split('\n')
        if (lines.every((line) => line.trim().startsWith('- '))) {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5 marker:text-accent-hover">
              {lines.map((line, i) => (
                <li key={i}>{line.trim().slice(2)}</li>
              ))}
            </ul>
          )
        }
        return <p key={index}>{block}</p>
      })}
    </div>
  )
}

export default RichText
