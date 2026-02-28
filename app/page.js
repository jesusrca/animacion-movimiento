"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Project 01",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    category: "Strategy",
    summary:
      "Rediseño de experiencia para un producto de reclutamiento con foco en claridad, confianza y decisión rápida en móviles.",
    portfolio: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 02",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
    category: "Product Design",
    summary:
      "Sistema visual y arquitectura de información para acelerar descubrimiento de servicios y onboarding contextual.",
    portfolio: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 03",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    category: "Brand Platform",
    summary:
      "Narrativa de marca y motion toolkit para campañas editoriales orientadas a performance y retención.",
    portfolio: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 04",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    category: "Experience",
    summary:
      "Dirección de interfaz para journeys complejos, combinando animación 3D, contenido y navegación progresiva.",
    portfolio: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 05",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    category: "UI Systems",
    summary:
      "Construcción de biblioteca de componentes y patrones de contenido para equipos de marketing y producto.",
    portfolio: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 06",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    category: "Creative Dev",
    summary:
      "Micrositio inmersivo con scroll narrativo, integración de video y elementos 3D de alto rendimiento.",
    portfolio: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 07",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    category: "Research",
    summary:
      "Investigación con usuarios y síntesis de hallazgos para definir roadmap de funcionalidades prioritarias.",
    portfolio: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Project 08",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80",
    category: "Launch",
    summary:
      "Estrategia de lanzamiento digital con contenido modular para web, social y materiales de ventas.",
    portfolio: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
    ]
  }
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const isPanelOpen = Boolean(selectedProject);
  const activeProject = selectedProject;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.getElementById("app");
    if (!container) return undefined;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a1018, 8, 22);

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.35, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xbfd9ff, 1.8);
    keyLight.position.set(5, 4, 7);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x6e90ff, 2.2, 20, 2);
    fillLight.position.set(-4, 1.5, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.4, 16, 2);
    rimLight.position.set(0, -2, -2);
    scene.add(rimLight);

    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    const floatingGroup = new THREE.Group();
    floatingGroup.add(orbitGroup);
    scene.add(floatingGroup);

    function createRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function createProjectCardTexture(image, title) {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 768;
      const ctx = canvas.getContext("2d");

      if (!ctx) return null;

      ctx.fillStyle = "#0f1722";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      createRoundedRect(ctx, 24, 24, 976, 720, 38);
      ctx.save();
      ctx.clip();

      const imgAspect = image.width / image.height;
      const targetAspect = 976 / 720;
      let drawW;
      let drawH;
      let offsetX;
      let offsetY;

      if (imgAspect > targetAspect) {
        drawH = 720;
        drawW = drawH * imgAspect;
        offsetX = 24 - (drawW - 976) / 2;
        offsetY = 24;
      } else {
        drawW = 976;
        drawH = drawW / imgAspect;
        offsetX = 24;
        offsetY = 24 - (drawH - 720) / 2;
      }

      ctx.drawImage(image, offsetX, offsetY, drawW, drawH);

      const overlay = ctx.createLinearGradient(0, 460, 0, 744);
      overlay.addColorStop(0, "rgba(7, 12, 18, 0.05)");
      overlay.addColorStop(1, "rgba(7, 12, 18, 0.72)");
      ctx.fillStyle = overlay;
      ctx.fillRect(24, 24, 976, 720);

      ctx.strokeStyle = "rgba(255,255,255,0.14)";
      ctx.lineWidth = 2;
      createRoundedRect(ctx, 24, 24, 976, 720, 38);
      ctx.stroke();

      ctx.fillStyle = "rgba(223, 235, 247, 0.72)";
      ctx.font = "500 20px Inter, Arial, sans-serif";
      ctx.fillText("Featured Project", 66, 92);

      ctx.fillStyle = "#f7fbff";
      ctx.font = "600 52px Inter, Arial, sans-serif";
      ctx.fillText(title, 62, 660);

      ctx.fillStyle = "rgba(225, 236, 248, 0.78)";
      ctx.font = "400 24px Inter, Arial, sans-serif";
      ctx.fillText("Immersive showcase / Motion-first experience", 64, 704);

      ctx.restore();

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    }

    function createCenterLogoTexture() {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");

      if (!ctx) return null;

      const bg = ctx.createLinearGradient(0, 0, 1024, 1024);
      bg.addColorStop(0, "#0d1623");
      bg.addColorStop(1, "#11161d");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 1024, 1024);

      const glow = ctx.createRadialGradient(512, 420, 60, 512, 420, 440);
      glow.addColorStop(0, "rgba(109, 155, 255, 0.16)");
      glow.addColorStop(1, "rgba(109, 155, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, 1024, 1024);

      ctx.strokeStyle = "rgba(255,255,255,0.14)";
      ctx.lineWidth = 4;
      createRoundedRect(ctx, 44, 44, 936, 936, 56);
      ctx.stroke();

      ctx.fillStyle = "#f4f8fe";
      ctx.textAlign = "center";
      ctx.font = "600 178px Inter, Arial, sans-serif";
      ctx.fillText("XX", 512, 460);

      ctx.font = "500 44px Inter, Arial, sans-serif";
      ctx.fillStyle = "rgba(223, 235, 247, 0.8)";
      ctx.fillText("MOTION STUDIO", 512, 555);

      ctx.font = "400 28px Inter, Arial, sans-serif";
      ctx.fillStyle = "rgba(223, 235, 247, 0.58)";
      ctx.fillText("3D Interactive Portfolio Ring", 512, 620);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    }

    const cardMeshes = [];
    const cardWrappers = [];
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function createCardMesh(texture, width = 2.2, height = 1.55) {
      const geometry = new THREE.PlaneGeometry(width, height, 18, 18);
      const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        transparent: true,
        roughness: 0.42,
        metalness: 0.08,
        clearcoat: 0.18,
        clearcoatRoughness: 0.45,
        side: THREE.DoubleSide
      });

      return new THREE.Mesh(geometry, material);
    }

    function createSoftShadow(width = 2.4, height = 1.75) {
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 256;
      shadowCanvas.height = 256;
      const ctx = shadowCanvas.getContext("2d");
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(128, 128, 18, 128, 128, 110);
      gradient.addColorStop(0, "rgba(0,0,0,0.30)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);

      const texture = new THREE.CanvasTexture(shadowCanvas);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false
      });

      const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -0.95;
      return plane;
    }

    const centerTexture = createCenterLogoTexture();
    if (!centerTexture) return undefined;

    const centerCard = createCardMesh(centerTexture, 2.6, 2.6);
    centerCard.position.set(0, 0, 0);
    orbitGroup.add(centerCard);

    const centerGlowMaterial = new THREE.SpriteMaterial({
      map: (() => {
        const c = document.createElement("canvas");
        c.width = 256;
        c.height = 256;
        const cx = c.getContext("2d");
        if (!cx) return null;
        const g = cx.createRadialGradient(128, 128, 16, 128, 128, 110);
        g.addColorStop(0, "rgba(109, 155, 255, 0.34)");
        g.addColorStop(1, "rgba(109, 155, 255, 0)");
        cx.fillStyle = g;
        cx.fillRect(0, 0, 256, 256);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        return t;
      })(),
      transparent: true,
      depthWrite: false
    });

    const centerGlow = new THREE.Sprite(centerGlowMaterial);
    centerGlow.scale.set(4.8, 4.8, 1);
    centerGlow.position.set(0, 0, -0.6);
    orbitGroup.add(centerGlow);

    const loader = new THREE.TextureLoader();
    const radius = 4.2;
    const verticalWave = 0.24;

    Promise.all(
      projects.map(
        (project) =>
          new Promise((resolve) => {
            loader.load(project.image, (texture) => {
              const image = texture.image;
              const finalTexture = createProjectCardTexture(image, project.title);
              resolve({ ...project, texture: finalTexture });
            });
          })
      )
    ).then((loadedProjects) => {
      loadedProjects.forEach((project, index) => {
        const wrapper = new THREE.Group();
        const mesh = createCardMesh(project.texture);
        const shadow = createSoftShadow();
        mesh.userData.project = project;

        wrapper.add(mesh);
        if (shadow) wrapper.add(shadow);

        const angle = (index / loadedProjects.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(index * 0.85) * verticalWave;

        wrapper.position.set(x, y, z);
        mesh.lookAt(0, y * 0.45, 0);
        mesh.rotation.z = Math.sin(index * 1.3) * 0.035;

        orbitGroup.add(wrapper);
        cardMeshes.push(mesh);
        cardWrappers.push(wrapper);

        gsap.to(wrapper.position, {
          y: `+=${0.18 + (index % 3) * 0.03}`,
          duration: 1.8 + index * 0.11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        gsap.to(mesh.rotation, {
          z: mesh.rotation.z + (index % 2 === 0 ? 0.04 : -0.04),
          x: index % 2 === 0 ? 0.025 : -0.025,
          duration: 2.2 + index * 0.07,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    });

    const state = {
      rotationY: 0,
      targetRotationY: 0,
      velocityY: 0,
      isDragging: false,
      dragStartX: 0,
      dragStartRotation: 0,
      pointerX: 0,
      pointerY: 0,
      parallaxX: 0,
      parallaxY: 0,
      downX: 0,
      downY: 0,
      moved: false
    };

    function onPointerDown(e) {
      state.isDragging = true;
      state.dragStartX = e.clientX;
      state.dragStartRotation = state.targetRotationY;
      state.downX = e.clientX;
      state.downY = e.clientY;
      state.moved = false;
      container.classList.add("is-dragging");
    }

    function onPointerMove(e) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      state.pointerX = nx;
      state.pointerY = ny;
      state.parallaxX = nx * 0.24;
      state.parallaxY = ny * 0.14;

      if (!state.isDragging) return;

      const deltaX = e.clientX - state.dragStartX;
      const deltaFromStart = Math.hypot(e.clientX - state.downX, e.clientY - state.downY);
      if (deltaFromStart > 6) state.moved = true;
      const dragStrength = 0.0065;
      state.targetRotationY = state.dragStartRotation + deltaX * dragStrength;
      state.velocityY = deltaX * 0.00012;
    }

    function selectProjectFromPointer(clientX, clientY) {
      if (!cardMeshes.length) return;
      pointer.x = (clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(cardMeshes, false);
      if (hits.length > 0) {
        const project = hits[0].object.userData.project;
        if (project) {
          setSelectedProject(project);
        }
      }
    }

    function onPointerUp(e) {
      if (!state.moved && typeof e?.clientX === "number") {
        selectProjectFromPointer(e.clientX, e.clientY);
      }
      state.isDragging = false;
      container.classList.remove("is-dragging");
    }

    function onWheel(e) {
      state.targetRotationY += e.deltaY * 0.0011;
    }

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointerleave", onPointerUp);
    window.addEventListener("wheel", onWheel, { passive: true });

    const virtualScroller = document.createElement("div");
    virtualScroller.style.position = "absolute";
    virtualScroller.style.top = "0";
    virtualScroller.style.left = "0";
    virtualScroller.style.width = "1px";
    virtualScroller.style.height = "500vh";
    virtualScroller.style.pointerEvents = "none";
    virtualScroller.style.opacity = "0";
    document.body.appendChild(virtualScroller);

    const scrollController = { progress: 0 };

    gsap.to(scrollController, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: virtualScroller,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2
      },
      onUpdate: () => {
        state.targetRotationY =
          state.targetRotationY * 0.985 +
          scrollController.progress * Math.PI * 2.2 * 0.015;
      }
    });

    gsap.to(floatingGroup.position, {
      y: 0.28,
      ease: "none",
      scrollTrigger: {
        trigger: virtualScroller,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4
      }
    });

    gsap.to(camera.position, {
      z: 7.7,
      ease: "none",
      scrollTrigger: {
        trigger: virtualScroller,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.6
      }
    });

    orbitGroup.scale.set(0.86, 0.86, 0.86);
    orbitGroup.rotation.y = -0.4;

    gsap.to(orbitGroup.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.8,
      ease: "power3.out"
    });

    gsap.to(orbitGroup.rotation, {
      y: 0,
      duration: 2.1,
      ease: "power3.out"
    });

    gsap.to(centerCard.rotation, {
      z: 0.02,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(centerGlow.scale, {
      x: 5.1,
      y: 5.1,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    const clock = new THREE.Clock();
    let rafId = 0;

    function animate() {
      rafId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      state.rotationY += (state.targetRotationY - state.rotationY) * 0.07;
      state.velocityY *= 0.94;
      state.targetRotationY += state.velocityY;

      orbitGroup.rotation.y = state.rotationY;

      floatingGroup.position.y +=
        (Math.sin(elapsed * 0.85) * 0.08 - floatingGroup.position.y) * 0.03;
      floatingGroup.rotation.x +=
        (-state.parallaxY * 0.18 - floatingGroup.rotation.x) * 0.05;
      floatingGroup.rotation.y +=
        (state.parallaxX * 0.14 - floatingGroup.rotation.y) * 0.05;

      camera.position.x += (state.parallaxX * 0.28 - camera.position.x) * 0.035;
      camera.position.y +=
        (0.35 - state.parallaxY * 0.18 - camera.position.y) * 0.035;
      camera.lookAt(0, 0.1, 0);

      cardWrappers.forEach((wrapper, i) => {
        wrapper.rotation.y = Math.sin(elapsed * 0.8 + i) * 0.02;
        wrapper.rotation.x = Math.cos(elapsed * 0.75 + i * 0.5) * 0.012;
        wrapper.position.z +=
          (Math.sin(elapsed * 1.2 + i * 0.9) * 0.035) * 0.02;
      });

      renderer.render(scene, camera);
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      ScrollTrigger.refresh();
    }

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerleave", onPointerUp);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      virtualScroller.remove();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
      renderer.dispose();
      scene.clear();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <main className={isPanelOpen ? "panel-open" : ""}>
      <div id="app" aria-label="Carrusel 3D interactivo" />

      <div className="ui">
        <div className="headline">
          <div className="eyebrow">3D Project Orbit</div>
          <h1>Interactive Motion Showcase</h1>
          <p>
            Carrusel 3D inspirado en una experiencia editorial premium: tarjetas
            flotantes en órbita, arrastre con mouse, scroll controlado y
            micro-oscilaciones sutiles para una sensación viva.
          </p>
        </div>

        <div className="hint">
          <strong>Interacción:</strong>
          <br />
          Arrastra para girar • usa el wheel para acelerar la rotación • mueve
          el cursor para un leve parallax.
        </div>
      </div>

      <aside className={`project-panel ${isPanelOpen ? "is-open" : ""}`}>
        <button
          className="project-panel-close"
          type="button"
          onClick={() => setSelectedProject(null)}
          aria-label="Cerrar panel"
        >
          x CLOSE
        </button>

        {activeProject ? (
          <div className="project-panel-content">
            <div className="project-panel-header">
              <p>{activeProject.category}</p>
              <h2>{activeProject.title}</h2>
            </div>
            <p className="project-panel-description">{activeProject.summary}</p>
            <div className="project-panel-grid">
              {activeProject.portfolio.map((imageUrl, index) => (
                <article key={`${activeProject.title}-${index}`} className="project-panel-card">
                  <img src={imageUrl} alt={`${activeProject.title} portfolio ${index + 1}`} />
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </aside>
    </main>
  );
}
