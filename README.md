# rat-sim

Simulation and visualization of how rats reproduce.

```mermaid
flowchart TD
    w0["Age: 0w
        Pregnancy: -7w"]
    w1["Age: 1w
        Pregnancy: -6w"]
    w7["Age: 7w
        Pregnancy: 0w"]
    w8["Age: 8w
        Pregnancy: 1w"]
    w9["Age: 9w
        Pregnancy: 2w"]
    w10["Age: 10w
         Give Birth!
         Pregnancy: -1w"]
    w11["Age: 11w
         Pregnancy: 0w"]
    w0 --> w1
    w1 -.-> w7
    w7 --> w8
    w8 --> w9
    w9 --> w10
    w10 --> w11
