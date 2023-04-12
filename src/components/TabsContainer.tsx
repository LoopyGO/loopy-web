'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { Container } from './ui/Container'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

export function TabsContainer() {
  return (
    <Container className="h-full w-full p-0 overflow-hidden ">
      <Tabs.Root
        defaultValue="carrear"
        className="flex w-full flex-col xl:flex-row justify-between h-full"
      >
        <div className="flex flex-col w-full flex-1  xl:max-w-xs py-8 px-6 h-full justify-between items-start">
          <div className="overflow-x-auto w-full ">
            <Tabs.List className="flex items-center w-full justify-start gap-2  whitespace-nowrap">
              <Tabs.Trigger value="carrear" asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="data-[state=active]:btn-active hover:bg-base-5 hover:text-base-12"
                >
                  Carreira
                </Button>
              </Tabs.Trigger>
              <Tabs.Trigger value="solo" asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="data-[state=active]:btn-active hover:bg-base-5 hover:text-base-12"
                >
                  Ranked Solo
                </Button>
              </Tabs.Trigger>
              <Tabs.Trigger value="duo" asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="data-[state=active]:btn-active hover:bg-base-5 hover:text-base-12"
                >
                  Ranked Duo
                </Button>
              </Tabs.Trigger>
              <Tabs.Trigger value="duo" asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="data-[state=active]:btn-active hover:bg-base-5 hover:text-base-12"
                >
                  Ranked Duo
                </Button>
              </Tabs.Trigger>
              <Tabs.Trigger value="duo" asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="data-[state=active]:btn-active hover:bg-base-5 hover:text-base-12"
                >
                  Ranked Duo
                </Button>
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <Tabs.Content
            value="carrear"
            className="flex h-2/3 flex-col items-start justify-between data-[state=inactive]:hidden"
          >
            <div>
              <h3 className="text-2xl leading-10">Carreira</h3>
              <p className="text-sm text-base-11">
                Jogue agora seu modo carreira e suba para o próximo nivel Jogue agora seu modo
              </p>
            </div>
            <Button variant="primary" size="md" fullWidth className="active:scale-95">
              Jogar Agora
            </Button>
          </Tabs.Content>
          <Tabs.Content
            value="solo"
            className="flex h-2/3 flex-col items-start justify-between data-[state=inactive]:hidden"
          >
            <div>
              <h3 className="text-2xl leading-10">Ranked Solo</h3>
              <p className="text-sm text-base-11">
                Jogue agora seu modo carreira e suba para o próximo nivel Jogue agora seu modo
              </p>
            </div>
            <Button variant="primary" size="md" fullWidth>
              Jogar Agora
            </Button>
          </Tabs.Content>
          <Tabs.Content
            value="duo"
            className="flex h-2/3 flex-col items-start justify-between data-[state=inactive]:hidden"
          >
            <div>
              <h3 className="text-2xl leading-10">Ranked Duo</h3>
              <p className="text-sm text-base-11">
                Jogue agora seu modo carreira e suba para o próximo nivel Jogue agora seu modo
              </p>
            </div>
            <Button variant="primary" size="md" fullWidth>
              Jogar Agora
            </Button>
          </Tabs.Content>
        </div>
        <div className="bg-base-3 max-w-3xl  xl:h-[520px] p-6 overflow-y-scroll">
          <Tabs.Content value="carrear" className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={37}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
          </Tabs.Content>
          <Tabs.Content value="solo" className="data grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={37}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
          </Tabs.Content>
          <Tabs.Content value="duo" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={37}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={0}
              status="locked"
              size="sm"
            />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </Container>
  )
}
