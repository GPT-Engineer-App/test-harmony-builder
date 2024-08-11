import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        
        <p className="text-xl mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats make wonderful companions 
          for millions of people around the world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Retractable claws</li>
                <li>Excellent night vision</li>
                <li>Flexible body and spine</li>
                <li>Keen sense of balance</li>
                <li>Highly territorial</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Cat Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Maine Coon</li>
                <li>Persian</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-lg">
          Whether you're a cat owner or simply an admirer, these elegant and mysterious animals 
          continue to captivate us with their charm and personality.
        </p>
      </div>
    </div>
  );
};

export default Index;
