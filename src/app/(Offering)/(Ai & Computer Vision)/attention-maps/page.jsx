"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";
const Page = () => {
  const [loader,setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
  })
  return (
<div>
  {
      !loader? <div className="loaderbox">
      <div className="loader"></div>
    </div> :<div>

    <div className="position-relative video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src="/maps.mp4"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="container sec position-absolute top-50 start-50 translate-middle text-center">
          <h1
            style={{ color: "#FFF", fontWeight: "500" }}
            className="about-data"
          >
           Subspace Attention Pooling for Compact Neural Networks

          </h1>
        </div>
    </div>


      <div className="container my-3">
        <h2 className='text-center mb-3'>Subspace Attention Pooling for Compact Neural Networks</h2>

              <div className="row">
                  <div className="col-md-6">
                  <h2 style={{color:" #964B00"}}>Problem Overview</h2>
                  <p className='p'>In this project, we seek to reduce computation and memory overheads of various backbone networks for various applications ranging form detection, tracking, pose estimation, etc.</p>

                  <p className='p'>Learning to capture long-range inter-dependencies in visual data is of primary interest for deep convolution neural networks. However, convolution operations in vanilla CNNs are responsible for capturing local relations, hence, are inefficient to capture long-range dependencies.</p>


                  <p className='p'>We try to overcome the issues associated with CNNs by capturing long-range dependencies in visual data. We aim to achieve the same while keeping in mind the computation and parameter overhead. We have observed that by dividing the feature maps into multiple subspaces and learning to capture spatial as well as cross channel interactions among the feature maps provides us with compute efficient way to capture long-range dependencies in the data.</p>
                  </div>
                  <div className="col-md-6"></div>
              </div>

        <h2 style={{color:" #964B00"}}>Challenges</h2>

        <p className="p">Convolution neural networks or CNNs have achieved exceptional performance in various cognitive tasks. The unprecedented performance of CNNs stems from the rich representational power of CNNs, which in-turn stems from the deeper and wider layers of networks. Deeper and wider layers boost the expressiveness and discrimination ability of the network by circumventing the limitations of convolution operators, viz., locality, and linearity. In CNN's, convolution operators capture the local (e.g., 3 × 3) feature correlations and enable weight sharing to reduce the number of learnable parameters. Multiple convolution operators are stacked in CNNs to enlarge the receptive field and capture the long-range dependencies, which makes the CNNs deeper. Further, since the linearity of convolution operation leads to inefficient capturing of the non-linear abstraction of input data, CNN's employ a higher number of filters per layer which are learned to capture all the possible variations of the same latent concept. However, this makes the CNNs wider. Altogether, deeper, and wider layers in CNNs leads to high computational cost (measured in the number of floating-point operations or FLOPs), and the number of parameters increases which makes deployment of CNNs on resource-constrained platforms quite challenging.</p>

        <h2 style={{color:" #964B00"}}>Approach:</h2>

        <p className="p">For a set of intermediate feature maps F∈ R^(c x h x w), where c is the number of channels, h and w are the spatial dimensions of the feature maps. Our objective is to learn to capture spatial inter-dependencies in the feature maps without incurring significant parameter and computation overhead. As shown in Figure, Subspace Attention Pooling divides the input feature maps (F) into g mutually exclusive groups [F1, F2, ....Fn˜, ....Fn] where each group has G feature maps. For a set of attention maps, We define Fn˜ as a group of intermediate feature maps and proceed as follows.</p>

           <p className="p">
          Here, U and V are attention parameters. We approximate the attention map Amap as a low-rank approximation: A_map = UV T where U, V ∈ Rf×1. Gsq(.) denotes squeeze operation i.e weighted sum of individual feature maps. This way of pooling enables the network to capture spatial relations in the feature maps. The pooled features are then passed through a multi-layer perceptron which broadcasts the spatial information from each subspace. The final set of feature maps is obtained by Gscale(.) operation which distributes the spatial information among the feature maps.
          </p>

                <h2 style={{color:" #964B00"}}>Impact</h2>
                <p className="p">Results have shown that it has achieved a 26% reduction in computation overhead and a 33% reduction in memory overhead without disrupting the performance of Mobilenet V1 and Mobilenet v2 in various classification and localization tasks.</p>
                <p className="p">
                  It has various applications with simple and minimal changes to the existing backbone networks for various applications.
                </p>

      </div>
   </div>
  }

</div>
  )
}

export default Page
