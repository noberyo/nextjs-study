import Button from "./components/button/button";

export default function ButtonPage() {
  return (
    <>
      <h1 className="mb-8 text-3xl text-slate-400 font-bold">Button</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex gap-4">
          <h2>size: (default)</h2>
          <Button>Button</Button>
          <Button variant="primary">CREATE</Button>
          <Button variant="secondary">EDIT</Button>
          <Button variant="danger">DELETE</Button>
          <Button className="bg-orange-600">Button</Button>
        </div>
        <div className="mb-8 flex gap-4">
          <h2>size: xs</h2>
          <Button size="xs">Button</Button>
          <Button variant="primary" size="xs">
            CREATE
          </Button>
          <Button variant="secondary" size="xs">
            EDIT
          </Button>
          <Button variant="danger" size="xs">
            DELETE
          </Button>
          <Button className="bg-orange-600" size="xs">
            Button
          </Button>
        </div>
        <div className="mb-8 flex gap-4">
          <h2>size: sm</h2>
          <Button size="sm">Button</Button>
          <Button variant="primary" size="sm">
            CREATE
          </Button>
          <Button variant="secondary" size="sm">
            EDIT
          </Button>
          <Button variant="danger" size="sm">
            DELETE
          </Button>
          <Button className="bg-orange-600" size="sm">
            Button
          </Button>
        </div>
        <div className="mb-8 flex gap-4">
          <h2>size: md</h2>
          <Button size="md">Button</Button>
          <Button variant="primary" size="md">
            CREATE
          </Button>
          <Button variant="secondary" size="md">
            EDIT
          </Button>
          <Button variant="danger" size="md">
            DELETE
          </Button>
          <Button className="bg-orange-600" size="md">
            Button
          </Button>
        </div>

        <div className="mb-8 flex gap-4">
          <h2>size: lg</h2>
          <Button size="lg">Button</Button>
          <Button variant="primary" size="lg">
            CREATE
          </Button>
          <Button variant="secondary" size="lg">
            EDIT
          </Button>
          <Button variant="danger" size="lg">
            DELETE
          </Button>
          <Button className="bg-orange-600" size="lg">
            Button
          </Button>
        </div>
        <div className="mb-8 flex gap-4">
          <h2>size: xl</h2>
          <Button size="xl">Button</Button>
          <Button variant="primary" size="xl">
            CREATE
          </Button>
          <Button variant="secondary" size="xl">
            EDIT
          </Button>
          <Button variant="danger" size="xl">
            DELETE
          </Button>
          <Button className="bg-orange-600" size="xl">
            Button
          </Button>
        </div>
      </div>
    </>
  );
}
